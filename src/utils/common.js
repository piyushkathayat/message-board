export const getUniqueId = (messages) => {
    if (messages.length > 0) {
        // get all parent id's
        const parentId = messages.map(msg => msg.id);
        let allId = [];
        let allReplyId = [];

        // get all reply id's from all messages
        messages.forEach(message => {
            const replyId = message.reply.map(msg => msg.id);
            allReplyId = [...allReplyId, ...replyId];
        });
        // concat parent and reply id's
        allId = [...parentId, ...allReplyId]

        // get the maximum number
        const maxId = Math.max(...allId);

        // console.log("LAST_ID :", maxId);
        return maxId + 1;
    }

    return 1;
};
