
$(document).ready(function(){
			$("ul li").click(function(){
				$("ul li").attr("class", "normal");
				$(this).attr("class", "selecionado");
			});
		});