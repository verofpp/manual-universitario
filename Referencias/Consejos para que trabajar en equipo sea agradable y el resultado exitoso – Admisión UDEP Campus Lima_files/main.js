/* SECUENCIA DE FOTOS */

  // JavaScript para controlar la secuencia de fotos
  document.addEventListener('DOMContentLoaded', function() {
    var fotos = document.querySelectorAll('.foto');

    if (fotos.length > 0) {
        var FotoActual = 0;
        var tiempoFotoIndividual = 2000;  

        function mostrarSiguienteFoto() {
            fotos[FotoActual].classList.remove('foto-actual');
            FotoActual = (FotoActual + 1) % fotos.length;
            fotos[FotoActual].classList.add('foto-actual');
        }

        setInterval(mostrarSiguienteFoto, tiempoFotoIndividual);
    } else {
        console.log("No se encontro la clase 'foto' en esta página.");
    }
});

  

	/****************************************************** */


$(document).ready(function() { 

	$('#seccion_1').css("display", "block");
    $('#seccion_2').css("display", "none");



    $('.fn_Asistir').click(function(){
       var dataId = $(this).attr("data-ids");
       $("#post_id").val(dataId);

       var titulo = $(this).attr("data-title");
       $(".titulo").text(titulo);

       var img = $(this).attr("data-img");
       $(".imagen-evento").attr("src",img);

       //limpiando los campos al iniciar el modal

	   $('#registro_simple #dni').val('');
       $('#registro_simple #nombre').val('');
       /*$('#registro_simple #apellidos').val('');*/

       $('#registro_simple #paterno').val('');
       $('#registro_simple #materno').val('');
       $('#registro_simple #correo').val('');
       $('#registro_simple #telefono').val('');
       $('#registro_simple #colegio').val('');
       $('#registro_simple #fecha_nac').val('');
       $(".mensaje_evento").text('');
       $("select#egreso")[0].selectedIndex = 0;
       $("select#carrera")[0].selectedIndex = 0;
       $("select#departamento")[0].selectedIndex = 0;      


       $('#registro_simple input').attr('disabled', 'disabled');
       $('#registro_simple select').attr('disabled', 'disabled');
       $("#registro_simple input#dni").removeAttr('disabled'); 

       $(".mensaje_evento_existente").text('');
       $('#distrito').val('');

       $("#pronabec_landing").prop("checked", false);
    });


   $('#ir_mundo').click(function(){

   	   var mediaqueryList = window.matchMedia("(min-width: 992px)");
   	   if(mediaqueryList.matches) {
          $('.navbar-nav').css("background-color", "#1e1b1b");
   		  $('.navbar-nav').css("width", "100%");
   		  $('.navbar-nav').css("justify-content", "flex-end");
        }else{
          $('.navbar-nav').css("background-color", "#fff");
   		  $('.navbar-nav').css("width", "100%");
   		  $('.navbar-nav').css("justify-content", "flex-start");

        }

   	 

    $('#seccion_1').fadeOut(300, function() {
      $('#seccion_2').fadeIn(300);
    });
  });

	
	jQuery('#close_notifi').click(function(){
				jQuery('.bar_notifi').slideToggle("fast");
		jQuery('#close_notifi').slideToggle("fast");
	});
	

	if(jQuery('#fecha_nacimiento').length > 0){
		jQuery('#fecha_nacimiento').datepick({dateFormat: 'yyyy-mm-dd', showTrigger: '#calImg'});
	//	jQuery('#fecha_nacimiento').datepick({dateFormat: 'yyyy-mm-dd', showTrigger: '#calImg'});
		jQuery('#fecha_cumple_director').datepick({dateFormat: 'yyyy-mm-dd', showTrigger: '#calImg'});
		jQuery('#fecha_cumple_coord').datepick({dateFormat: 'yyyy-mm-dd', showTrigger: '#calImg'});
		jQuery('#fecha_cumple_orientador').datepick({dateFormat: 'yyyy-mm-dd', showTrigger: '#calImg'});
	}
	

	jQuery(".lima").css("display", "none");
	jQuery(".provincia").css("display", "none");

	jQuery("input[name='colegio']").click(function(){
		$valor = jQuery("input[name='colegio']:checked").val()

		if ( $valor == "LIMA" ){
			jQuery(".lima").css("display", "");
			jQuery(".lima.otro").css("display", "none");
			jQuery(".provincia").css("display", "none");

		}else{
			jQuery(".lima").css("display", "none");
			jQuery(".provincia").css("display", "");
		}
	});
	// 
	jQuery("#colelima_nombre1").change(function () {
		jQuery("#colelima_nombre1 option:selected").each(function () {
			$valor = jQuery(this).val()
			if ( $valor == "Otro" ){
				jQuery(".otro").css("display", "");
			}else{
				jQuery(".otro").css("display", "none");
			}
		});
	})

	/* Combo registro */

	if(jQuery("#siteUrl").length > 0){

			var siteUrl = jQuery("#siteUrl").val() + "/registroproceso.php";
			console.log("siteUrl", siteUrl);

		   jQuery("#coleprov_depa").change(function () {
		   		jQuery("#coleprov_depa option:selected").each(function () {
					//alert($(this).val());
						elegido=jQuery(this).val();
						  $.post(siteUrl, { elegido: elegido, typeProcess:"2" }, function(data){
						jQuery("#coleprov_prov").html(data);
						jQuery("#coleprov_dist").html("");
					});			
		        });
		   })

			jQuery("#coleprov_prov").change(function () {
		   		jQuery("#coleprov_prov option:selected").each(function () {
					//alert($(this).val());
						elegido=jQuery(this).val();
						$.post(siteUrl, { elegido: elegido, typeProcess:"1" }, function(data){
						jQuery("#coleprov_dist").html(data);
					});			
		        });
		   })

		   // INICIO COMBOS ALUMNOS   
			// Parametros para e coleprov_depa
		   jQuery("#alu_departamento").change(function () {
		   		jQuery("#alu_departamento option:selected").each(function () {
					//alert($(this).val());
						elegido=jQuery(this).val();
						$.post(siteUrl, { elegido: elegido, typeProcess:"2" }, function(data){
						jQuery("#alu_provincia").html(data);
						jQuery("#alu_distrito").html("");
					});			
		        });
		   })
			// Parametros para el coleprov_prov
			jQuery("#alu_provincia").change(function () {
		   		jQuery("#alu_provincia option:selected").each(function () {
					//alert($(this).val());
						elegido=jQuery(this).val();
						$.post(siteUrl, { elegido: elegido, typeProcess:"1" }, function(data){
						jQuery("#alu_distrito").html(data);
					});			
		        });
		   })

		   // FIN COMBOS ALUMNOS
		   jQuery("#colelima_dist").change(function () {
		   		jQuery("#colelima_dist option:selected").each(function () {
					//alert($(this).val());
						elegido=jQuery(this).val();
						$.post(siteUrl, { elegido: elegido, typeProcess:"3" }, function(data){
						jQuery("#colelima_nombre1").html(data);
					});			
		        });
		   })

		   

	}

	jQuery("#btnEnviar").click(function(e){
			e.preventDefault();
			var url = "registroguardar.php"; // El script a dónde se realizará la petición.
					jQuery("#btnEnviar").css("display", "none");
					$.ajax({
						   type: "POST",
						   url: jQuery("#siteUrl").val() + "/" + url,
						   data: jQuery("#formulario").serialize(), // Adjuntar los campos del formulario enviado.
						   success: function(data){
								ncantidad = data.length;
								/*alert(ncantidad);*/
								/*alert(data);*/
								if ( ncantidad < 20){
									var redirectTo = jQuery("#websiteUrl").val() + "/simulacro-ok/?es=ok";
									window.location.href = redirectTo;
									$("#respuesta").html("<span style='color:#3C0'>Mensaje enviado, revisa tu bandeja de entrada para recuperar tu contraseña.</span>"); // Mostrar la respuestas del script PHP.
									$("#btnEnviar").css("display", "inline-block");
									jQuery(".limpiar").val("");
								}else{
									jQuery("#respuesta").html("<span style='color:#F00'>"+data+"</span>"); // Mostrar la respuestas del script PHP.
									jQuery("#btnEnviar").css("display", "inline-block");
								}
						   }
						 });
					return false; // Evitar ejecutar el submit del formulario.
	});


	//Bootstrap TabCollapse
	$('#myTab').tabCollapse();



	// Stickytabs
	$(function() {
		$('.nav-tabs-sticky').stickyTabs();
	});



	// Owl.carousel.2.1.0

	// NUEVO OWL GALERÍA
	$('.owl-galeria').owlCarousel({
		items:1,
		loop:true,
		// margin:30,
		// stagePadding:50,
		// center:true,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		smartSpeed:2000,

		video:true,
		merge:true,
		lazyLoad:true,

		nav:true,
		dots:true,
		// dotsEach:3
	})
	// FIN NUEVO OWL GALERÍA



	$('#owl-notas-home').owlCarousel({
		items:3,
		loop:true,
		margin:30,
		// stagePadding:50,
		// center:true,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		smartSpeed:2000,

		video:true,
		merge:true,
		lazyLoad:true,

		responsive:{
			// 0:{items:1},
			360:{items:1},
			480:{items:3},
			768:{items:3},
			992:{items:3},
			1200:{items:3}
		},

		nav:false,
		dots:true,
		// dotsEach:3
	})

	$('#owl-video-1').owlCarousel({
		items:2,
		loop:true,
		margin:10,
		stagePadding:50,
		// center:true,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		smartSpeed:2000,

		video:true,
		merge:true,
		lazyLoad:true,

		responsive:{
			0:{items:1},
			360:{items:1},
			480:{items:1},
			768:{items:2},
			992:{items:2},
			1200:{items:2}
		},

		nav:true
	});

	$("#owl-logos-convenios").owlCarousel({
		items:5,
		loop:true,
		margin:10,
		stagePadding:50,
		// center:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		smartSpeed:1500,

		responsive:{
			0:{items:2},
			360:{items:2},
			480:{items:3},
			768:{items:3},
			992:{items:4},
			1200:{items:5}
		},

		nav:true
	});

	//carrusel
	$("#owl-agenda .owl-carousel").owlCarousel({
		items:1,
		loop:true,
		// margin:50,
		// stagePadding:50,
		// center:true,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		smartSpeed:2000,

		// responsive:{
		//   0:{items:1,autoplay:true,loop:true,stagePadding:0},
		//   360:{items:1,autoplay:true,loop:true,stagePadding:0},
		//   480:{items:1,autoplay:true,loop:true,stagePadding:0},
		//   768:{items:1,autoplay:true,loop:true,stagePadding:0},
		//   992:{items:1}
		// },

		nav:true
	});

  // 20190624 JYK
  $('.owl-general').owlCarousel({
    items:1,
    loop:true,
    // margin:30,
    // stagePadding:50,
    // center:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    smartSpeed:2000,
    video:true,
    merge:true,
    lazyLoad:true,
    // nav:true,
    dots:true,
    // dotsEach:3
  })




    $('.owl-footer-slide-fotos').owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true,
      smartSpeed:2000,

      merge:true,
      lazyLoad:true,

      nav:false,
      dots:false,
    })    



	//Bootstrap TabCollapse
	$('.fancybox').fancybox();



	// WOW.JS
	wow = new WOW(
	  {
	    boxClass:     'wow',      // default
	    animateClass: 'animated', // default
	    offset:       0,          // default
	    mobile:       false,       // default
	    live:         true        // default
	  }
	)
    wow.init();

   /* Funciones del simulacro */

    /* Login */

    jQuery("#simulacroEnter").click(function(e){
    	e.preventDefault();
    	if( !jQuery("#username").val() || !jQuery("#password").val() ){
    		
    		alert("Por favor ingresa tus datos correctamente");
    		return false;

    	} else {
    		jQuery("#formLogin").submit();
    	}
    });


    if(jQuery("#redirectDiv").length > 0){
    	setTimeout(function(){
    		window.location = window.location;
    		return false;
    	}, 2500);
    	
    }

    if(jQuery("#accessSimulacro").length > 0){
    	
    	setTimeout(function(){
    		window.location.href = "http://udep.edu.pe/admision/lima/simulacro-panel-de-resultados";
    		// window.location.href = "http://"+window.location.hostname+"/lima/simulacro-panel-de-resultados";
    		// window.location.href = "/lima/simulacro-panel-de-resultados";
    		return false;
    	}, 2500);
    }

    if(jQuery("#goToLogin").length > 0){
    	
    	setTimeout(function(){
    		window.location.href = "http://udep.edu.pe/admision/lima/simulacro-login";
    		return false;
    	}, 2500);
    }

    jQuery("#backExamen, #terminarExamen").click(function(){
    	if(timerExamen){
    		clearInterval(timerExamen);
    	}
    });

    jQuery("#backExamen").click(function(e){
    	e.preventDefault();
    	document.cookie = "simulacro=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/udepwp/;";
    	window.location.href = "http://udep.edu.pe/admision/lima/simulacro-login";
    });

    jQuery("#terminarExamen").click(function(e){
    	e.preventDefault();
    	jQuery("#examenForm").submit();
    });

    /* Examen */

    if(jQuery("#examenContainer").length > 0){

    	jQuery('.carousel').carousel({
    	  interval: false
    	});

    	/* Times */

    	var timerExamen = setInterval(function(){ 

    		var segundoElementPrint;
    		var minutoElementPrint;
    		var horaElementPrint;

    		var segundoElement = parseInt(jQuery("#simulacroSegundo").html());
    		

    		if(segundoElement == 0){

    			segundoElement = 59;
    			segundoElementPrint = segundoElement;

    			var minutoElement = parseInt(jQuery("#simulacroMinuto").html());
    			if(minutoElement == 0){
    				minutoElement = 59;
    				minutoElementPrint = minutoElement;

    				var horaElement = parseInt(jQuery("#simulacroHora").html());

    				if(horaElement == 0){
    					clearInterval(timerExamen);
    					jQuery("#examenForm").submit();
    					return false;
    					
    				} else {
    					--horaElement;
    					horaElementPrint = "0" + horaElement;
    					jQuery("#simulacroHora").html(horaElementPrint);
    				}

    
    				
    				
    				
    			} else {
    				--minutoElement;
    				minutoElementPrint = minutoElement;
    				if(minutoElement < 10){
    					minutoElementPrint = "0" + minutoElement;
    				}
    			}

    			jQuery("#simulacroMinuto").html(minutoElementPrint);

    		} else {

    			--segundoElement;
    			segundoElementPrint = segundoElement;
    			if(segundoElement < 10){
    				segundoElementPrint = "0" + segundoElement;
    			}

    		}


    		if(parseInt(jQuery("#simulacroSegundo").html()) == 1 && 
    			parseInt(jQuery("#simulacroMinuto").html()) == 30 && 
    			parseInt(jQuery("#simulacroHora").html()) == 0){
    			
    			alert("Te quedan 30 minutos para terminar el Simulacro Examen de Admisión");
    		}

    		jQuery("#simulacroSegundo").html(segundoElementPrint);


    	}, 1000);
    	
    }
	

});






  

// $(document).ready(function(){
// 	$('#myTab-accordion .panel-title a').click(function(){
// 		$(this).removeAttr('class');
//     	$(this).addClass("active");
// 	});
// });



// Dropdown Menu Fade    
// jQuery(document).ready(function(){
//     $(".dropdown").hover(
//         function() {
//         	$('.dropdown-menu', this).fadeIn("fast");
//         },
//         function() {
//         	$('.dropdown-menu', this).fadeOut("fast");
//     	}
//     );
// });


