const fs = require('fs').promises;

const filePath = 'text.txt';
const encoding = 'utf8';

const replaceLinks = async () => {
    try {
        let data = await fs.readFile(filePath, encoding);
        console.log('Исходный текст:');
        console.log(data);

        const regex = /<a href="(?!\/subfolder\/)([^"]+)"/g;
        data = data.replace(regex, (match, p1) => {
            return `<a href="/subfolder/${p1}"`;
        });

        await fs.writeFile(filePath, data, encoding);
        let changedData = await fs.readFile(filePath, encoding);
        console.log('Измененный текст:');
        console.log(changedData);
    } catch (err) {
        console.error('Ошибка при обработке файла:', err);
    }
};

replaceLinks();