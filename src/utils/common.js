export const getUniqueId = (messages) => {
    if (messages.length > 0) {
        const parentId = messages.map(msg => msg.id);
        let allId = [];
        let allReplyId = [];
        messages.forEach(message => {
            const replyId = message.reply.map(msg => msg.id);
            allReplyId = [...allReplyId, ...replyId];
        });
        allId = [...parentId, ...allReplyId]
        const maxId = Math.max(...allId);
        // console.log("LAST_ID :", maxId);
        return maxId + 1;
    }

    return 1;
};
