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
        { id: 1, username: "1test", email: "testing@example.com", password: "123" },
        { id: 2, username: "2test", email: "testing2@example.com", password: "123" },
        { id: 3, username: "3test", email: "testing3@example.com", password: "123" },
        { id: 4, username: "4test", email: "testing4@example.com", password: "123" },
        { id: 5, username: "5test", email: "testing5@example.com", password: "123" }
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

        set((state) => ({ users: [...state.users, { id: nextId, ...newUser }] }));
      },

      login: (email, password) => {
        const { users } = get();
        const user = users.find((user) => user.email === email && user.password === password);
        if (!user) {
          throw new Error("Invalid user or password");
        }
        set({ currentUser: user });
      },

      logout: () => {
        set({ currentUser: null });
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
      getChannelDetails: (serverId, channelId) => {
        const { servers } = get();
        const server = servers.find((server) => server.id === serverId);
      
        if (!server) {
          console.error(`Server with ID ${serverId} not found.`);
          return null;
        }
      
        console.log("Server found:", server.name);
      
        let channel = null;
        Object.keys(server.categories).forEach((categoryKey) => {
          console.log(`Searching in category: ${categoryKey}`);
          const category = server.categories[categoryKey];
          const channel = category.find((ch) => Number(ch.id) === Number(channelId));
          if (channel) return; // Stop the loop once the channel is found
        });
      
        if (!channel) {
          console.error(`Channel with ID ${channelId} not found in server ${serverId}.`);
        }
      
        return channel || null;
      },
          
      resetStore: () => {
        set({
          users: [
            { id: 1, username: "1test", email: "testing@example.com", password: "123" },
            { id: 2, username: "2test", email: "testing2@example.com", password: "123" },
            { id: 3, username: "3test", email: "testing3@example.com", password: "123" },
            { id: 4, username: "4test", email: "testing4@example.com", password: "123" },
            { id: 5, username: "5test", email: "testing5@example.com", password: "123" }
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
