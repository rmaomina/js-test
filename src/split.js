function splitProc(str) { //str = "id=imonster&pw=12345"
    console.log('str: ' + str);

    const s = str.split("&");
    const sid = s[0].split('=');
    const spw = s[1].split('=');

    const id = sid[1];
    const pw = spw[1];
    
    return '사용자의 아이디는' + id + ', 비밀번호는 ' + pw + '입니다.';
}