export const getUniqueId = (messages) => {
    if (messages.length > 0) {
        const allId = messages.map(msg => msg.id);
        const maxId = Math.max(...allId);
        return maxId + 1;
    }

    return 1;
};
