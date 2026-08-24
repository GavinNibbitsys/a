alert("asdgfsd")
(function() {
    // Generates a random string of text
    function makeRandomText() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
        let result = '';
        const length = 100; // Character length of each file
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Trigger 10 separate downloads
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const content = `Random File Content: ${makeRandomText()}`;
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = `random_file_${i + 1}.txt`;
            
            document.body.appendChild(link);
            link.click();
            
            // Clean up memory
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }, i * 200); // 200ms stagger prevents Chrome from skipping downloads
    }
})();

