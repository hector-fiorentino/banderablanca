$(document).ready(function(){
	var dpi = window.devicePixelRatio;
	var folder = "mdpi";
	switch(dpi){
		case 1:
			//if(window.width()>320){
				//folder = "xxhdpi";
				//$('body').css('zoom','3');
			//}else{
				folder = "mdpi";
			//}
		break;
		case 1.5:
		 	folder = "hdpi";
		break;
		case 2:
			folder = "xhdpi";
		break;
		case 3:
			folder = "xxhdpi";
		break;
	}
	var els = $("img.dpi-var").get();
		for(var i = 0; i < els.length; i++) {
			var src = els[i].src
			src = src.replace("/mdpi/", "/" + folder + "/");
			els[i].src = src;
		}
		//alert(els);
	
	//Buscar imagenes con dpi variable y reemplaza el folder por el adecuado.
	$.post("http://banderablanca.org.ar/GetNews",{},function(exito){
		if(exito){
			$("loader").hide();
			if(exito.newsType=="found"){
				$("#foto").css("background-color","transparent");
				$("#foto").attr("src","assets/imagenes/"+folder+"/banderaverde.png");
			}else{
				$("#foto").attr("src",exito.newsPictureURI);
			}
			$("#titulo").html(exito.newsTitle);
			$("#desc").html(exito.newsDescription);
			$("#busqueda").show();
		}
	},"json")
})