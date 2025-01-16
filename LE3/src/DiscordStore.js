import {create} from "zustand";

const useDiscordStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user: user }),

    servers: [{ id: 1, name: "Server 1", icon: "icon-url" }],
    setServers: (servers) => set({ servers: servers }),
    addServer: (server) => set((state) => ({ servers: [...state.servers, server] }))
}));

export default useDiscordStore;