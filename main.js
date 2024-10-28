const screenElem = document.getElementById('box');
let screen = '';
let memory = '0';






document.getElementById('table').addEventListener('click', (event) => {
    let target = event.target;
    if (target.tagName === 'BUTTON') {
        let content = target.id;

        switch(content) {
            case '0':
                if (screen[0] === '0' && screen[1] !== '.') {
                    screen = '';
                }
                screen += '0';
                break
            case '1':
                if (screen[0] === '0' && screen[1] !== '.') {
                    return;
                }
                screen += '1';
                break
            case '2':
                if (screen[0] === '0' && screen[1] !== '.') {
                    screen = '';
                }
                screen += '2';
                break
            case '3':
                if (screen[0] === '0' && screen[1] !== '.') {
                    screen = '';
                }
                screen += '3';
                break
            case '4':
                if (screen[0] === '0' && screen[1] !== '.') {
                    screen = '';
                }
                screen += '4';
                break
            case '5':
                if (screen[0] === '0' && screen[1] !== '.') {
                    screen = '';
                }
                screen += '5';
                break      
            case '6':
                if (screen[0] === '0' && screen[1] !== '.') {
                    screen = '';
                }
                screen += '6';
                break
            case '7':
                if (screen[0] === '0' && screen[1] !== '.') {
                    screen = '';
                }
                screen += '7';
                break
            case '8':
                if (screen[0] === '0' && screen[1] !== '.') {
                    screen = '';
                }
                screen += '8';
                break
            case '9':
                if (screen[0] === '0' && screen[1] !== '.') {
                    screen = '';
                }
                screen += '9';
                break       
            case '+':
                if (screen == '') {
                    return;
                }
                if (screen.split(' ').length === 1) {
                    screen += ' + ';
                }
                else {
                    let solved = solve();
                    screen = solved + ' + ';
                }
                
                break;
            case '-':
                if (screen == '') {
                    return;
                }
                if (screen.split(' ').length === 1) {
                    screen += ' - ';
                }
                else {
                    let solved = solve();
                    screen = solved + ' - ';
                }
                
                break;
            case '*':
                if (screen == '') {
                    return;
                }
                if (screen.split(' ').length === 1) {
                    screen += ' × ';
                }
                else {
                    let solved = solve();
                    screen = solved + ' × ';
                }
                
                break;
            case '/':
                if (screen == '') {
                    return;
                }
                if (screen.split(' ').length === 1) {
                    screen += ' ÷ ';
                }
                else {
                    let solved = solve();
                    screen = solved + ' ÷ ';
                }
                
                break;
            case '=':
                if (screen == '') {
                    return;
                }
                if (screen.split(' ').length === 1 || screen.split(' ').length === 2) {
                    return;
                }
                screen = solve();
                
                break;

            case '.':
                if (screen == '' || screen.split(' ')[2] == '') {
                    return;
                }
                if (screen.split(' ').length === 1 && screen.split(' ')[0].includes('.')) {
                    return;
                }
                else if (screen.split(' ').length === 3 && screen.split(' ')[2].includes('.')) {
                    return;
                }
                screen += '.';
                break

            case 'changeSign':
                let splited_screen = screen.split(' ');
                if (splited_screen.length === 1) {
                    screen = String(Number(splited_screen[0]) * -1);
                    if (splited_screen.length === 2) {
                        screen = ' ' + splited_screen[1] + ' ';
                    }
                }
                else if (splited_screen.length === 3) {
                    screen = splited_screen[0] + ' ' + splited_screen[1] + ' ' + String(Number(splited_screen[2]) * -1);
                }
                
                break

            case 'sqrt':
                screen = solve('sqrt');
                
                break;

            case '%':
                if (screen.split(' ')[1] === '×') {
                    screen = solve('%');
                }
                
                break;
            
            case 'pow':
                screen = solve('pow');
                
                break;

            case '1divx':
                screen = solve('1divx');
                
                break;

            case 'm+':
                if (screen.split(' ').length === 2) {
                    screen = screen.substring(0, screen.length - 3);
                }
                else if (screen.split(' ').length === 3) {
                    screen = solve();
                }
                memory = String(Number(memory) + Number(screen));
                
                break;

            case 'm-':
                if (screen.split(' ').length === 2) {
                    screen = screen.substring(0, screen.length - 3);
                }
                else if (screen.split(' ').length === 3) {
                    screen = solve();
                }
                memory = String(Number(memory) - Number(screen));

                break;
            
            case 'mc':
                memory = 0;

                break;

            case 'mr':
                screen = String(memory);

                break;

            case 'ca':
                screen = '';

                break;

            case 'ce':
                screen = '';
                memory = 0;

                break; 
            
            case 'remove':
                if (screen.split(' ').length === 1 || screen.split(' ').length === 3) {
                    screen = screen.substring(0, screen.length - 1);
                }
                else if (screen.split(' ').length === 2) {
                    screen = screen.substring(0, screen.length - 3);
                }
                else {
                    return;
                }
                
                break;
                
            default:
        }

        updateScreen();
    }
    
})