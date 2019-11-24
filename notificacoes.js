function Notificacao(texto,classe='success',tempo=2000,icone=false){
	var estilo = 'border-radius:10px;margin:5px;padding:10px;opacity:0.9;';
	var css = '@keyframes NotifyFadein { from { opacity:0; } to { opacity:0.9; } }@keyframes NotifyFadeout { from { opacity:0.9; } to { opacity:0; } }.MostraNotify{animation:NotifyFadein 0.5s;}.ApagaNotify{animation:NotifyFadeout 0.5s;}';
	var styleElement = document.createElement('style');
	styleElement.append(css);
	document.body.appendChild(styleElement);
	if(classe=='success'){
		estilo+='background:#d6e9c6;color:#1D691E';
		icone = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height:17px;margin-right:5px"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>';
	}
	if(classe=='info'){
		estilo+='background:#c2ebf3;color:#184391';
		icone ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" style="height:17px;margin-right:5px"><path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path></svg>';
	}
	if(classe=='danger'){
		estilo+='background:#ebc2c2;color:#A11E1E';
		icone ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height:17px;margin-right:5px"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>';
	}
	if(classe=='warning'){
		estilo+='background:#fcefc8;color:#8E4D13';
		icone = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="height:17px;margin-right:5px"><path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>';
	}
	if(classe=='dark'){
		estilo+='background:#c6c8ca;color:#000';
		icone ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height:17px;margin-right:5px"><path fill="currentColor" d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path></svg>';
	}
	if(classe=='light'){
		estilo+='background:#ebebeb;color:#4d5155';
		icone ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height:17px;margin-right:5px"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg>';
	}
	var NotificacoesJS = document.getElementById('NotificacoesJS');
	if (!NotificacoesJS) {
		var NotificacoesJS = document.createElement('div');
		NotificacoesJS.setAttribute('id','NotificacoesJS');
		NotificacoesJS.setAttribute('style','position:fixed;top:0;right:0;max-width:80%');
	}
	var notificacao = document.createElement('div');
	notificacao.setAttribute('style',estilo);
	notificacao.classList.add('MostraNotify');
	NotificacoesJS.appendChild(notificacao);
	var p = document.createElement('p');
	p.setAttribute('style','margin:0')
	notificacao.append(p);
	p.innerHTML = icone+texto;
	document.body.appendChild(NotificacoesJS);
	setTimeout(function(){ 
		notificacao.classList.add('ApagaNotify');
		setTimeout(function(){ 
			notificacao.remove()
		},450);
	}, tempo);
}
