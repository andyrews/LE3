import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { get, set, del } from "idb-keyval";

// Custom storage object for IndexedDB
const indexedDBStorage = {
  getItem: async (name) => {
    return (await get(name)) || null;
  },
  setItem: async (name, value) => {
    await set(name, value);
  },
  removeItem: async (name) => {
    await del(name);
  },
};

const useGlobal = create(
  persist(
    (set, get) => ({
      // User state
      users: [
        { id: 1, username: "1test", email: "testing@example.com", password: "123", displayName: "Test User", online: false, activity:null, avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Eliza" },
        { id: 2, username: "2test", email: "testing2@example.com", password: "123", displayName: "Test User 2", online: false, activity:null, avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Jocelyn"},
        { id: 3, username: "3test", email: "testing3@example.com", password: "123", displayName: "Test User 3", online: true, activity:"Listening to Spotify", avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Ryan"},
        { id: 4, username: "4test", email: "testing4@example.com", password: "123", displayName: "Test User 4", online: true, activity:"Playing Roblox", avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Aiden"},
        { id: 5, username: "5test", email: "testing5@example.com", password: "123", displayName: "Test User 5", online: true, activity:"wag nyo ko kausapin", avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Emery"}
      ],
      currentUser: {},
      registerUser: (newUser) => {
        const { users } = get();
        if (users.some((user) => user.username === newUser.username)) {
          throw new Error("Username already exists");
        } else if (users.some((user) => user.email === newUser.email)) {
          throw new Error("Email already in use.");
        }
        const nextId = users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;

        set((state) => ({ users: [...state.users, { id: nextId, ...newUser, online: false, activity: null, avatar: null }] }));
      },

      login: (email, password) => {
        const { users } = get();
        const user = users.find((user) => user.email === email && user.password === password);
        if (!user) {
          throw new Error("Invalid user or password");
        }
        set({ currentUser: user });
        set({ users: users.map((u) => (u.id === user.id ? { ...u, online: true } : u)) });
      },

      logout: () => {
        set({ currentUser: null });
        set({ users: get().users.map((u) => ({ ...u, online: false })) });
      },

      // Server state
      servers: [
        {
          id: 1,
          name: "Server Alpha",
          categories: {
            chats: [
              { id: 1, name: "general", type: "text" },
              { id: 2, name: "random", type: "text" }
            ],
            voicerooms: [
              { id: 3, name: "general", type: "voice" }
            ]
          },
          members: [1, 2, 4],
          lastActiveChannel: 1
        },
        {
          id: 2,
          name: "Server Beta",
          categories: {
            yap: [
              { id: 1, name: "general", type: "text" }
            ],
            yapper: [
              { id: 2, name: "random", type: "text" }
            ],
            yappest: [
              { id: 3, name: "general", type: "voice" }
            ]
          },
          members: [1, 3, 5],
          lastActiveChannel: 1
        },
        {
          id: 3,
          name: "Server Gamma",
          categories: {
            general: [
              { id: 1, name: "general", type: "text" },
              { id: 3, name: "general", type: "voice" }
            ],
            random: [
              { id: 2, name: "random", type: "text" }
            ]
          },
          members: [2, 3, 1],
          lastActiveChannel: 1
        }
      ],
      logState: () => {
        console.log("Current servers state:", get().servers);
      },

      joinServer: (serverId) => {
        const user = get().currentUser;
        if (!user || !user.id) {
          throw new Error("No user is logged in");
        }
        const { servers } = get();
        set({
          servers: servers.map((server) =>
            server.id === serverId
              ? {
                ...server,
                members: server.members.includes(user.id)
                  ? server.members
                  : [...server.members, user.id]
              }
              : server
          )
        });
      },
      onEnterChannel: (serverId, channelId) => {
        set((state) => {
          const updatedServers = state.servers.map((server) =>
            server.id === serverId
              ? { ...server, lastActiveChannel: channelId }
              : server
          );
          return { servers: updatedServers };
        });
      },
      getServerDetails: (serverId) => {
        const { servers } = get();
        const server = servers.find((server) => Number(server.id) === Number(serverId));
        
        if (!server) {
          console.error(`Server with ID ${serverId} not found.`);
          console.log("Available servers:", servers); // Log the current servers state for debugging
          return null;
        }
        
        console.log("Server found:", server.name);
        return server;
      },
      
      getChannelDetails: (serverId, channelId) => {
        const { servers } = get();
        console.log("Searching for server with ID:", serverId); // Log the serverId
        const server = servers.find((server) => Number(server.id) === Number(serverId));
      
        if (!server) {
          console.error(`Server with ID ${serverId} not found.`);
          console.log("Available servers:", servers); // Log the current servers state for debugging
          return null;
        }
      
        console.log("Server found:", server.name);
      
        // Flatten all channels from all categories into a single array
        const allChannels = Object.values(server.categories).flat();
      
        console.log("Flattened channels list:", allChannels); // Debug flattened list
      
        // Find the channel by comparing channelId with the id property of each channel object
        const channel = allChannels.find((channel) => Number(channel.id) === Number(channelId));
      
        if (!channel) {
          console.error(`Channel with ID ${channelId} not found in server ${serverId}.`);
          return null;
        }
      
        return channel;
      },
      getMembers: (serverId) => {
        const { servers, users } = get();
        const server = servers.find((server) => Number(server.id) === Number(serverId));
      
        if (server) {
          // Map member IDs to user details
          return server.members.map((memberId) => {
            return users.find((user) => user.id === memberId);
          });
        }
      
        return [];
      },      
      
      messages:[
        {"id": 1, "senderID": 2, "serverID": 1, "channelID": 1, "content": "Hey everyone! Anyone up for a gaming session tonight?", "timestamp": "2025-01-17T15:30:00Z"},
        {"id": 2, "senderID": 4, "serverID": 1, "channelID": 1, "content": "I can't make it, but let me know how it goes!", "timestamp": "2025-01-17T15:32:00Z"},
        {"id": 3, "senderID": 1, "serverID": 1, "channelID": 2, "content": "Random thought: pineapple on pizza is amazing.", "timestamp": "2025-01-17T15:35:00Z"},
        {"id": 4, "senderID": 3, "serverID": 2, "channelID": 1, "content": "Morning! Don't forget to submit your project drafts by 5 PM.", "timestamp": "2025-01-17T08:00:00Z"},
        {"id": 5, "senderID": 5, "serverID": 2, "channelID": 2, "content": "Did you see the new movie trailer? Looks epic!", "timestamp": "2025-01-17T14:20:00Z"},
        {"id": 6, "senderID": 1, "serverID": 2, "channelID": 2, "content": "Yeah, I can't wait for it to come out next month.", "timestamp": "2025-01-17T14:22:00Z"},
        {"id": 7, "senderID": 2, "serverID": 3, "channelID": 1, "content": "Server Gamma is so quiet lately. What's everyone up to?", "timestamp": "2025-01-17T12:45:00Z"},
        {"id": 8, "senderID": 3, "serverID": 3, "channelID": 2, "content": "Just working on some code. What's new with you?", "timestamp": "2025-01-17T13:00:00Z"},
        {"id": 9, "senderID": 1, "serverID": 3, "channelID": 1, "content": "Thinking about organizing a trivia night. Any takers?", "timestamp": "2025-01-17T13:10:00Z"}
      ],
      sendMessage: (serverID, channelID, senderID, content) => {
        const { messages } = get();
        const nextId = messages.length > 0 ? Math.max(...messages.map((message) => message.id)) + 1 : 1;
        console.log("Sending this message",nextId,content);
        const newMessage = {
          id: nextId,
          senderID,
          serverID,
          channelID,
          content,
          timestamp: new Date().toISOString()
        };
        console.log("made New message:", newMessage);
        set((state) => ({ messages: [...state.messages, newMessage] }));
        return newMessage;
      },
      getMessages: (serverID, channelID) => {
        const { messages } = get();
        console.log("Fetching messages for serverID:", serverID, "and channelID:", channelID);
        console.log("Current messages state:", messages);
        const filteredMessages = messages.filter((message) => Number(message.serverID) === Number(serverID)
         && Number(message.channelID) === Number(channelID));
        console.log("Filtered messages:", filteredMessages);
        return filteredMessages;
      },
      
      resetStore: () => {
        set({
          users: [
            { id: 1, username: "1test", email: "testing@example.com", password: "123", displayName: "Test User", online: false, activity:null, avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Eliza" },
            { id: 2, username: "2test", email: "testing2@example.com", password: "123", displayName: "Test User 2", online: false, activity:null, avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Jocelyn"},
            { id: 3, username: "3test", email: "testing3@example.com", password: "123", displayName: "Test User 3", online: true, activity:"Listening to Spotify", avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Ryan"},
            { id: 4, username: "4test", email: "testing4@example.com", password: "123", displayName: "Test User 4", online: true, activity:"Playing Roblox", avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Aiden"},
            { id: 5, username: "5test", email: "testing5@example.com", password: "123", displayName: "Test User 5", online: true, activity:"wag nyo ko kausapin", avatar: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Emery"}
          ],
          currentUser: null,
          servers: [
            {
              id: 1,
              name: "Server Alpha",
              categories: {
                chats: [
                  { id: 1, name: "general", type: "text" },
                  { id: 2, name: "random", type: "text" }
                ],
                voicerooms: [
                  { id: 3, name: "general", type: "voice" }
                ]
              },
              members: [1, 2, 4],
              lastActiveChannel: 1
            },
            {
              id: 2,
              name: "Server Beta",
              categories: {
                yap: [
                  { id: 1, name: "general", type: "text" }
                ],
                yapper: [
                  { id: 2, name: "random", type: "text" }
                ],
                yappest: [
                  { id: 3, name: "general", type: "voice" }
                ]
              },
              members: [1, 3, 5],
              lastActiveChannel: 1
            },
            {
              id: 3,
              name: "Server Gamma",
              categories: {
                general: [
                  { id: 1, name: "general", type: "text" },
                  { id: 3, name: "general", type: "voice" }
                ],
                random: [
                  { id: 2, name: "random", type: "text" }
                ]
              },
              members: [2, 3, 1],
              lastActiveChannel: 1
            }
          ],
          messages:[
            {"id": 1, "senderID": 2, "serverID": 1, "channelID": 1, "content": "Hey everyone! Anyone up for a gaming session tonight?", "timestamp": "2025-01-17T15:30:00Z"},
            {"id": 2, "senderID": 4, "serverID": 1, "channelID": 1, "content": "I can't make it, but let me know how it goes!", "timestamp": "2025-01-17T15:32:00Z"},
            {"id": 3, "senderID": 1, "serverID": 1, "channelID": 2, "content": "Random thought: pineapple on pizza is amazing.", "timestamp": "2025-01-17T15:35:00Z"},
            {"id": 4, "senderID": 3, "serverID": 2, "channelID": 1, "content": "Morning! Don't forget to submit your project drafts by 5 PM.", "timestamp": "2025-01-17T08:00:00Z"},
            {"id": 5, "senderID": 5, "serverID": 2, "channelID": 2, "content": "Did you see the new movie trailer? Looks epic!", "timestamp": "2025-01-17T14:20:00Z"},
            {"id": 6, "senderID": 1, "serverID": 2, "channelID": 2, "content": "Yeah, I can't wait for it to come out next month.", "timestamp": "2025-01-17T14:22:00Z"},
            {"id": 7, "senderID": 2, "serverID": 3, "channelID": 1, "content": "Server Gamma is so quiet lately. What's everyone up to?", "timestamp": "2025-01-17T12:45:00Z"},
            {"id": 8, "senderID": 3, "serverID": 3, "channelID": 2, "content": "Just working on some code. What's new with you?", "timestamp": "2025-01-17T13:00:00Z"},
            {"id": 9, "senderID": 1, "serverID": 3, "channelID": 1, "content": "Thinking about organizing a trivia night. Any takers?", "timestamp": "2025-01-17T13:10:00Z"}
          ]
        });
      }
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => indexedDBStorage),
      onRehydrateStorage: () => {
        console.log("State rehydrated");
      }
    }
  )
);

export default useGlobal;
