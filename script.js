// function handleSearch() {
//     const searchBox = document.getElementById('search-box');
//     const query = searchBox.value.trim();
 
// }
// function handleSearch() {
//     const searchBox = document.getElementById('search-box');
//     const query = searchBox.value.trim().toLowerCase();
//     const items = document.querySelectorAll('.card');
    
//     items.forEach(item => {
//         item.style.display = 'none';
//     });

//     if (query.includes('keyboard')) {
//         const keyboards = document.querySelectorAll('#key');
//         keyboards.forEach(keyboard => {
//             keyboard.style.display = 'block';
//         });
//     } else if (query.includes('mouse')) {
//         const mice = document.querySelectorAll('#mouse');
//         mice.forEach(mouse => {
//             mouse.style.display = 'block';
//         });
//     } else if (query.includes('ram')) {
//         const rams = document.querySelectorAll('#ram');
//         rams.forEach(ram => {
//             ram.style.display = 'block';
//         });
//     } else if (query.includes('m2') || query.includes('ssd')) {
//         const nvmessds = document.querySelectorAll('#m2');
//         nvmessds.forEach(m2 => {
//             m2.style.display = 'block';
//         });
//     } else if (query.includes('motherboard') || query.includes('mb')) {
//         const motherboards = document.querySelectorAll('#mb');
//         motherboards.forEach(mb => {
//             mb.style.display = 'block';
//         });
//     } else if (query.includes('cooler') || query.includes('cpu cooler')) {
//         const coolers = document.querySelectorAll('#cooler');
//         coolers.forEach(cooler => {
//             cooler.style.display = 'block';
//         });
//     } else if (query.includes('vga') || query.includes('vga')){
//         const vgas = document.querySelectorAll('#vga');
//         vgas.forEach(vga =>{
//             vga.style.display = 'block';
//         });
//     }else
//         items.forEach(item => {
//             item.style.display = 'block';
//         });
//     }

//     document.getElementById('search-btn').addEventListener('click', handleSearch);
//     document.getElementById('search-box').addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         handleSearch();
//     }
// });

//     document.getElementById('search-btn').addEventListener('click', handleSearch);
//     document.getElementById('search-box').addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         handleSearch();
//     }
// });

//     document.getElementById('search-btn').addEventListener('click', handleSearch);
//     document.getElementById('search-box').addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         handleSearch();
//     }
// });function handleSearch() {
//     const searchBox = document.getElementById('search-box');
//     const query = searchBox.value.trim();
 
// }
// function handleSearch() {
//     const searchBox = document.getElementById('search-box');
//     const query = searchBox.value.trim().toLowerCase();
//     const items = document.querySelectorAll('.card');
    
//     items.forEach(item => {
//         item.style.display = 'none';
//     });

//     if (query.includes('keyboard')) {
//         const keyboards = document.querySelectorAll('#key');
//         keyboards.forEach(keyboard => {
//             keyboard.style.display = 'block';
//         });
//     } else if (query.includes('mouse')) {
//         const mice = document.querySelectorAll('#mouse');
//         mice.forEach(mouse => {
//             mouse.style.display = 'block';
//         });
//     } else if (query.includes('ram')) {
//         const rams = document.querySelectorAll('#ram');
//         rams.forEach(ram => {
//             ram.style.display = 'block';
//         });
//     } else if (query.includes('m2') || query.includes('ssd')) {
//         const nvmessds = document.querySelectorAll('#m2');
//         nvmessds.forEach(m2 => {
//             m2.style.display = 'block';
//         });
//     } else if (query.includes('motherboard') || query.includes('mb')) {
//         const motherboards = document.querySelectorAll('#mb');
//         motherboards.forEach(mb => {
//             mb.style.display = 'block';
//         });
//     } else if (query.includes('cooler') || query.includes('cpu cooler')) {
//         const coolers = document.querySelectorAll('#cooler');
//         coolers.forEach(cooler => {
//             cooler.style.display = 'block';
//         });
//     } else if (query.includes('vga') || query.includes('vga')){
//         const vgas = document.querySelectorAll('#vga');
//         vgas.forEach(vga =>{
//             vga.style.display = 'block';
//         });
//     }else
//         items.forEach(item => {
//             item.style.display = 'block';
//         });
//     }

//     document.getElementById('search-btn').addEventListener('click', handleSearch);
//     document.getElementById('search-box').addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         handleSearch();
//     }
// });

//     document.getElementById('search-btn').addEventListener('click', handleSearch);
//     document.getElementById('search-box').addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         handleSearch();
//     }
// });

//     document.getElementById('search-btn').addEventListener('click', handleSearch);
//     document.getElementById('search-box').addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         handleSearch();
//     }
// });
function handleSearch() {
    const searchBox = document.getElementById('search-box');
    const query = searchBox.value.trim().toLowerCase();
    const items = document.querySelectorAll('.card');
    items.forEach(item => {
        item.style.display = 'none';
    });
    if (query.includes('keyboard')) {
        const keyboards = document.querySelectorAll('#key');
        keyboards.forEach(keyboard => {
            keyboard.style.display = 'flex';
        });
    } else if (query.includes('mouse')) {
        const mice = document.querySelectorAll('#mouse');
        mice.forEach(mouse => {
            mouse.style.display = 'flex';
        });
    } else if (query.includes('ram')) {
        const rams = document.querySelectorAll('#ram');
        rams.forEach(ram => {
            ram.style.display = 'flex';
        });
    } else if (query.includes('m2') || query.includes('ssd')) {
        const nvmessds = document.querySelectorAll('#m2');
        nvmessds.forEach(m2 => {
            m2.style.display = 'flex';
        });
    } else if (query.includes('motherboard') || query.includes('mb')) {
        const motherboards = document.querySelectorAll('#mb');
        motherboards.forEach(mb => {
            mb.style.display = 'flex';
        });
    } else if (query.includes('cooler') || query.includes('cpu cooler')) {
        const coolers = document.querySelectorAll('#cooler');
        coolers.forEach(cooler => {
            cooler.style.display = 'flex';
        });
    } else if (query.includes('vga') || query.includes('vga')) {
        const vgas = document.querySelectorAll('#vga');
        vgas.forEach(vga => {
            vga.style.display = 'flex';
        });
    } else {
        items.forEach(item => {
            item.style.display = 'flex';
        });
    }
}
document.getElementById('search-btn').addEventListener('click', handleSearch);
document.getElementById('search-box').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
