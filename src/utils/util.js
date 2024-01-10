export const groupDataByDay = (data) => {
    const groupedData = {};

    data.forEach(item => {
        const createdAtDate = new Date(item.created_at).toLocaleDateString();

        if (!groupedData[createdAtDate]) {
            groupedData[createdAtDate] = [];
        }

        groupedData[createdAtDate].push(item);
    });

    const sortedGroupedData = Object.keys(groupedData)
        .sort((a, b) => new Date(a) - new Date(b))
        .reduce((acc, key) => {
            acc[key] = groupedData[key];
            return acc;
        }, {});

    return sortedGroupedData;
};