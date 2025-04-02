import { create } from 'zustand';

interface Event {
    id: string;
    title: string;
    description: string;
    organizer: string;
    time: string;
    place: string;
    price: string;
    field: string;
    organizer_link?: string;
    payment_link?: string;
}

interface EventStore {
    events: Event[];
    addEvents: (newEvents: Event[]) => void;
    clearEvents: () => void;
}

const useEventStore = create<EventStore>((set) => ({
    events: [],
    addEvents: (newEvents) =>
        set((state) => ({
            events: [...state.events, ...newEvents],
        })),
    clearEvents: () =>
        set(() => ({
            events: [],
        })),
}));

export default useEventStore;