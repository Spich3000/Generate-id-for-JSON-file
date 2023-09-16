const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const filePath = "/Users/User/Documents/"
const fileName = "UserFile.json"
const newFileName = "newUserFile.json"

// Read JSON data from file
fs.readFile(filePath + fileName, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        const jsonArray = JSON.parse(data);

        // Add IDs to objects and move them to the first position
        // for (let i = 0; i < jsonArray.length; i++) {
        //     const id = uuidv4();

        //     jsonArray[i] = { id, ...jsonArray[i] }; // Add the ID at the first position
        // }

        // Add IDs to objects as integer index
        jsonArray.forEach((item, index) => {
            item.id = index + 1; // Assign integer index as the ID
        });

        // Write updated data back to file
        fs.writeFile(filePath + newFileName, JSON.stringify(jsonArray, null, 2), 'utf8', err => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('IDs added and data written to file.');
        });
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});

