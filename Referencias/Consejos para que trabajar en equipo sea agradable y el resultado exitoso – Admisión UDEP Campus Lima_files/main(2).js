
jQuery(document).ready(function($){
  $("input[name='tipo']:first").prop("checked", true);
/*
  $('#btnEventos').click(function(e){       alert("entre");
   // e.preventDefault();   //evitar el eventos del enlace normal
    var strAncla=$(this).attr('href'); //id del ancla
    $(strAncla).offset().top+850;
      /*$('body,html').stop(true,true).animate({        
        scrollTop: $(strAncla).offset().top+850
      },1000);
    
  });*/

$('#vereventos').click(function(e) { 
  //alert("si");
  e.preventDefault();
  var activo="";
  if($(this).hasClass('activo')){
    $(this).removeClass('activo');
   activo=1;
  }else{
    $(this).addClass('activo');
    activo=0
  }

   $.ajax({
          type: "POST",
          url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/mundoudep_assets/vereventostodos.php',
          dataType: "html",
          data:{
              activo: activo
                      }, 
         success: function(data){
              $('#resultadoeventos').html(data);
              if(activo==0){
                $("#vereventos").html('Ver Menos');
              }
              else{
                 $("#vereventos").html('Ver TODOS los eventos anteriores');
              }
            },
         error: function(data){
              $('#resultadoeventos').html('<h3><strong>Error | No hay datos</strong></h3>');
            }
        });
   

  
    return false;

});

  $('#cmb_carreras').on('change',function(){
  //alert("si");
  
    var activo="";
    var id=$('#cmb_carreras').val();;
    activo=2;

   $.ajax({
          type: "POST",
          url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/mundoudep_assets/vereventostodos.php',
          dataType: "html",
          data:{
              activo: activo,
              id: id
                      }, 
         success: function(data){
              $('#resultadoeventos').html(data);
             
            },
         error: function(data){
              $('#resultadoeventos').html('<h3><strong>Error | No hay datos</strong></h3>');
            }
        });
   

  


});

    
     

$('#examenparticipar').click(function(e) { 
 var siteUrl = jQuery("#fileUri").val() + "/mundoudep_assets/participarexamen.php";
 var correo= $('#correoresultado').val();
  var dni= $('#passwordresultado').val();
      $.ajax({
        type: "POST",
               url: siteUrl,
              data: {
                 correo: correo,
                 dni: dni,
                
                },// Adjuntar los campos del formulario enviado.
               success: function(data){
                  console.log(data);
               },
          
             });

});  

$("#resultadoadmision").on('change',function(){   
    var siteUrl = jQuery("#fileUri").val() + "/mundoudep_assets/consultarexamenadmision.php";
    var correo= $('#correoresultado').val();
    var dni= $('#passwordresultado').val();
    var examenadmision= $('#resultadoadmision').val();
    var nombre=$('#nombreresultado').val();

    
    $.ajax({
        type: "POST",
               url: siteUrl,
              data: {
                 correo: correo,
                 dni: dni,
                 examenadmision: examenadmision,
                 nombre: nombre,
                },// Adjuntar los campos del formulario enviado.
               success: function(data){
                ncantidad = data.length;
                /*alert(ncantidad);*/
                //alert(data);
                if ( ncantidad > 0){
                  
                  
                  
                  $("#respuestaresultado").html(data); // Mostrar la respuestas del script PHP.   
                  
                    
                }else{
                  $("#respuestaresultado").html("<small>Error de código. Las causas de este error pueden ser:<br>- Aún no se publican los resultados correspondientes a tu código.<br>- Tu código no es correcto o está mal escrito.<br><br>Verifica tu número de código o vuélvelo a intentar más tarde.</small>"); // Mostrar la respuestas del script PHP. 
                  
                }
               },
          
             });
  });


$("#btnadmision_mundoudep").click(function() {

   var siteUrl = jQuery("#fileUri").val() + "/mundoudep_assets/consultarexamenadmision.php";
   // var correo= $('#correoresultado').val();
    var dni= $('#dni_codigo').val();
    var examenadmision= $('#resultadoadmision').val();
   // var nombre=$('#nombreresultado').val();

    
    $.ajax({
        type: "POST",
               url: siteUrl,
              data: {
                 //correo: correo,
                 dni: dni,
                 examenadmision: examenadmision,
                // nombre: nombre,
                },// Adjuntar los campos del formulario enviado.
               success: function(data){
                ncantidad = data.length;
                /*alert(ncantidad);*/
                //alert(data);
                if ( ncantidad > 0){
                  
                  
                  
                  $("#respuestaresultado").html(data); // Mostrar la respuestas del script PHP.   
                  
                    
                }else{
                  $("#respuestaresultado").html("<small>Error de código. Las causas de este error pueden ser:<br>- Aún no se publican los resultados correspondientes a tu código.<br>- Tu código no es correcto o está mal escrito.<br><br>Verifica tu número de código o vuélvelo a intentar más tarde.</small>"); // Mostrar la respuestas del script PHP. 
                  
                }
               },
          
             });
   
  });



$('#salirmundoudep').click(function(){

  $.ajax({
        url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/salirmundoudep.php',
        type: 'POST',
        data: "",
    }).done(function(data) {
      if(data=="1")
      $.Fredirect('https://www.udep.edu.pe/admision/lima/');
     
    });
 
});

$('#click_login').click(function(e) { 
  e.preventDefault();
  var correo= $('#correo').val();
  var password=$('#password').val();
  

  $.ajax({
        url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/loginmundoudep.php',
        type: 'POST',
        data: {
         correo: correo,
         password: password,
        },
    }).done(function(data) {
      var jsonData = JSON.parse(data);
     // alert(jsonData.dato);
      switch(jsonData.dato) {
       case "1":
         $.redirect('https://www.udep.edu.pe/admision/lima/', {data:'1'});                           
        break;        
       case "2":
        console.log("no existe");
        
       default:
       // code to be executed if n is different from case 1 and 2
      }
    })
    return false;

});
$('#click_loginfooter').click(function(e) { 
  e.preventDefault();
  var correo= $('#correof').val();
  var password=$('#passwordf').val();
  

  $.ajax({
        url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/loginmundoudep.php',
        type: 'POST',
        data: {
         correo: correo,
         password: password,
        },
    }).done(function(data) {
      var jsonData = JSON.parse(data);
     // alert(jsonData.dato);
      switch(jsonData.dato) {
       case "1":
         $.redirect('https://www.udep.edu.pe/admision/lima/', {data:'1'});                           
        break;        
       case "2":
        console.log("no existe");
        
       default:
       // code to be executed if n is different from case 1 and 2
      }
    })
    return false;

});

   $(".lista_menu_principal li a" ).click(function() { 
            $( "#nav-pri" ).removeClass( "open" ).addClass( "closing" );
            $( "#nav-pri" ).removeClass( "closing" );
          });
 /*        
 $('#fullpage').fullpage({
      anchors: ['slide1', 'slide2', 'slide3'],
      menu: '#menu',
      scrollingSpeed: 1000,
      navigation: true,
      navigationPosition: 'right',
      scrollOverflow: true,
      afterLoad : function( anchorLink, index){
      var path=anchorLink;
      //alert(path);
      if(path == 'slide3'){
        $(".caja_nav").css("display","none");
      }else{
        $(".caja_nav").css("display","block");
      }
      
      }
    });*/


  $("#colegio_1").hide();
  $("#colegio_2").hide();
  $(".colegio_1").hide();
  $(".colegio_2").hide();


});

/*validación del departamento y el checkbox del interés*/
jQuery.validator.addMethod("valueNotEquals", function(value, element, arg){
  return arg !== value;
 }, "Value must not equal arg.");


/*fn carrera*/
$('#departamento').on('change',function(){
  var depa= $('#departamento').val();
  var typeProcess=2;
   var col_depa=$('#departamento').val();
  if(col_depa!="LIMA"){
  	 $("#colegio_1").hide();
 	 $("#colegio_2").show();
 	 $(".colegio_1").hide();
 	 $(".colegio_2").show();
  }
  $.ajax({
        url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/registroproceso.php',
        type: 'POST',
        data: {
         typeProcess: typeProcess,
         elegido: depa,
        },
    }).done(function(data) {
      $('#provincia').html('<option value="0">Provincia</option>'+data);
       $('#distrito').html('<option value="0">Distrito</option>');
      
      }).fail(function(e) {
      console.log("error");
    })

});
$('#provincia').on('change',function(){
  var depa= $('#provincia').val();
  var typeProcess=1;
  var col_depa=$('#departamento').val();
  var col_pro=$('#provincia').val();
  if(col_depa="LIMA" && col_pro=="LIMA_d14p01"){
  	 $("#colegio_1").show();
 	 $("#colegio_2").hide();
 	 $(".colegio_1").show();
 	 $(".colegio_2").hide();
  }
  else{
  	$("#colegio_1").hide();
 	 $("#colegio_2").show();
 	 	$(".colegio_1").hide();
 	 $(".colegio_2").show();
  }

  $.ajax({
        url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/registroproceso.php',
        type: 'POST',
        data: {
         typeProcess: typeProcess,
         elegido: depa,
        },
    }).done(function(data) {
      $('#distrito').html('<option value="0">Distrito</option>'+data);

      
      }).fail(function(e) {
      console.log("error");
    })

});
$('#distrito').on('change',function(){
  var depa= $('#distrito').val();
  var typeProcess=3;
  $.ajax({
        url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/registroproceso.php',
        type: 'POST',
        data: {
         typeProcess: typeProcess,
         elegido: depa,
        },
    }).done(function(data) {
      $('#colegio_1').html('<option value="0">Colegio</option>'+data);

      
      }).fail(function(e) {
      console.log("error");
    })

});

$('#colegio_1').on('change',function(){

var otro=$('#colegio_1').val();
if(otro=="Otro"){
	$("#colegio_2").show();
	$(".colegio_2").show();
}else{
	$("#colegio_2").hide();
	$(".colegio_2").hide();
}
});


$('#carrera1').on('change',function(){
  var carrera1=$('#carrera1').val();
  var carrera2=$('#carrera2').val();
  if(carrera1==carrera2){
    alert('Las carreras deben ser diferentes');
    $('#carrera1').val(0);
  }

});
$('#carrera2').on('change',function(){
  var carrera1=$('#carrera1').val();
  var carrera2=$('#carrera2').val();
  if(carrera1==carrera2){
    alert('Las carreras deben ser diferentes');
    $('#carrera2').val(0);
  }

});




$("#registro").validate({
  rules: {
      nombre: {
          required: true,
          minlength: 2
      },
       apellidosp: {
          required: true,
          minlength: 2
      },
      apellidosm: {
          required: true,
          minlength: 2
      },
      correo: {
          required: true,
          email: true
      },
       dni: {
          required: true,
          minlength: 2,
          number:true
      },
      telefono: {
          required: true,
          minlength: 7,
          maxlength: 9,
          number:true
      },

      departamento: {
          valueNotEquals: "0",
           required: true,
      },
        provincia: {
          valueNotEquals: "0",
           required: true,
      },
        distrito: {
          valueNotEquals: "0",
           required: true,
      },
       colegio_1: {
          valueNotEquals: "0",
           required: true,
      },
      colegio_2: {
          required: true,
          minlength: 5
      },
      egreso: {
        required: true,
        valueNotEquals: "0"

      },
      /*interes: {
          required: true
      },*/
      terminos: {
          required: true
      },
      carrera1: {
           valueNotEquals: "0"
      },
       carrera2: {
           valueNotEquals: "0"
      },
     
      message: "required"
  },
  messages: {
    nombre: "Por favor ingrese sus Nombres",
    apellidosp: "Por favor ingrese sus Apellidos",
    apellidosm: "Por favor ingrese sus Apellidos",
    correo: "Por favor ingrese su correo",
    telefono: "Por favor ingrese su teléfono",
    dni: "Por favor ingrese su DNI",
    departamento: { valueNotEquals: "Por favor seleccione un departamento" },
    provincia: { valueNotEquals: "Por favor seleccione un provincia" },
    distrito: { valueNotEquals: "Por favor seleccione un distrito" },
    colegio_1: "Por favor ingrese su colegio",
    colegio_2: "Por favor ingrese su colegio",
    egreso: "Por favor ingrese su año de egreso",
    terminos: "Por favor seleccione aceptar términos",
    message: "Please enter a short message, what your inquiry is about",
    carrera1:{ valueNotEquals: "Por favor seleccione una carrera"},
    carrera2:{ valueNotEquals: "Por favor seleccione una carrera"},
    
  },
  errorPlacement: function(error, element) {
   if (element.attr("name") == "interes" ){
      error.insertAfter(".interes");
   }else if (element.attr("name") == "terminos" ){          
      error.insertAfter(".termino");
   }else{
     error.insertAfter(element);
   }       
  },
  submitHandler: function(form) {
    var carrera1 = $('#carrera1').val();
    var carrera2 = $('#carrera2').val();
    var apellidosp= $('#apellidosp').val();
    var apellidosm= $('#apellidosm').val();
    var nombre = $('#nombre').val();
    var correo = $('#correo').val();
    var dni = $('#dni').val();
    var egreso = $('#egreso').val();
    var telefono = $('#telefono').val();
    var col_depa=$('#departamento').val();
  	var col_pro=$('#provincia').val();
  	var colegio="";
  	if(col_depa="LIMA" && col_pro=="LIMA_d14p01"){
  		otro=$('#colegio_1').val();
  		if(otro=="Otro"){
  			colegio = $('#colegio_2').val();	
  		}
  		else{
    	colegio = $('#colegio_1').val();
    	}
    }
    else{
    	colegio = $('#colegio_2').val();	
    }

    var departamento = $('#departamento').val();
    var provincia = $('#provincia').val();
    var distrito = $('#distrito').val();
   
    var interes2 = "";
    var interes = "";
    var terminos = "";
    var vocacional_docente="";
    var canal_acceso = $('#canal_acceso').val();

   
	if( $('#interes').prop('checked') ) {
    	interes=1;
	}else{
		interes=0;
	}

  if( $('#interes2').prop('checked') ) {
      interes2=1;
  }else{
    interes2=0;
  }

	if( $('#terminos').prop('checked') ) {
    	terminos=1;
	}else{
		terminos=0;
	}
	if( $('#vocacional_docente').prop('checked') ) {
    	vocacional_docente=1;
	}else{
		vocacional_docente=0;
	}

    $.ajax({
        url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/registrarmundoudep.php',
        type: 'POST',
        data: {
          carrera1: carrera1,
          carrera2: carrera2,
          interes: interes,
          interes2: interes2,                  
          nombre: nombre,
          apellidosp: apellidosp,
          apellidosm: apellidosm,
          email: correo,
          telefono: telefono,
          dni: dni,
          egreso:egreso,
          colegio:colegio,
          departamento: departamento,
          provincia: provincia,
          distrito: distrito,
          terminos: terminos,
          vocacional_docente: vocacional_docente,
          canal_acceso: canal_acceso
        },
    })
    .done(function(data) {
      console.log(data);
      var jsonData = JSON.parse(data);
      //alert(jsonData.dato);
      switch(jsonData.dato) {
       case "1":
        alert("Usted ya está registrado_");
        break;        
       case "2":
        console.log("registrado correctamente");
         $.ajax({
        url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/correoregistro.php',
        type: 'POST',
        data: {
                         
          nombre: nombre,
          apellidosp: apellidosp,
          apellidosm: apellidosm,
          email: correo,
          dni: dni,
          
        },
    })
    .done(function(data) {
       var jsonDatas = JSON.parse(data);
       if(jsonDatas.datos=='3'){
        console.log('si entro');
       }
 
    });

      
       default:
       // code to be executed if n is different from case 1 and 2
      } 
       $.redirect('https://www.udep.edu.pe/admision/lima/gracias-pre-registro/', {data:'1'}); 

      
    })
    .fail(function(data) {
      console.log("error");
    })
    .always(function(data) {
      console.log("complete");
    });     
  }
});





$('#buscarDni').click(function(e) { 
    var dni= $('#dni').val();
    var dniformteado=dni.trim(); 

   /* if( !(/^\d{8}[A-Z]$/.test(valor)) ) {
  return false;
}*/

    //var dniregex=dniformteado.value.replace(/[^0-9]/g,'');
    if(dniformteado != "" ){

      $.ajax({
          url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/verificardnimundoudep_simple.php',
          type: 'POST',
          data: {
            dni:dni
          },
      })
      .done(function(data) {
       // console.log(data);
        var jsonData = JSON.parse(data);
       // alert(jsonData.v1 + " "+ jsonData.v2 + " "+ jsonData.v3);


        switch(jsonData.dato) {
         case "1"://si existe en la bd
          $(".mensaje_evento_existente").text("Ya tenemos tus datos , haz clic en registrar");
          $(".mensaje_evento_existente").css("color","#24b144");
          $('#nombre').val(jsonData.nombre);
          /*$('#apellidos').val(jsonData.apellidos);*/
          $('#paterno').val(jsonData.paterno);
          $('#materno').val(jsonData.materno);
          $('#correo').val(jsonData.correo);
          $('#telefono').val(jsonData.telefono);
          $('#egreso').val(jsonData.anio_egreso);
          $('#carrera').val(jsonData.carrera1);
          $('#colegio').val(jsonData.colegio);
          $('#distrito').val(jsonData.distrito);
         // $('#fecha_nac').val(jsonData.fecha_nac);
          $('#departamento').val(jsonData.departamento);


          $('#registro_simple input').attr('disabled', 'disabled');
          $('#registro_simple select').attr('disabled', 'disabled');
          $("#registro_simple input#dni").removeAttr('disabled');
          $("#registro_simple input#click").removeAttr('disabled');
          $("#acepto").removeAttr('disabled');

          document.getElementById("pronabec_landing").disabled = false;

          if(jsonData.pronabec == 'Si'){
            $("#pronabec_landing").prop("checked", true);
          }else{
            $("#pronabec_landing").prop("checked", false);
            document.getElementById("pronabec_landing").disabled = false;
          }

         
          
          break;        
         case "2":// no existe en la bd
          $(".mensaje_evento_existente").text("No te tenemos registrado por favor llena tus datos");
          $(".mensaje_evento_existente").css("color","#dc3545");

          $('#registro_simple #nombre').val('');
          /*$('#registro_simple #apellidos').val('');*/
          $('#registro_simple #paterno').val('');
          $('#registro_simple #materno').val('');
          
          $('#registro_simple #correo').val('');
          $('#registro_simple #telefono').val('');
          $('#registro_simple #colegio').val('');
         // $('#registro_simple #fecha_nac').val('');

          document.getElementById("egreso").selectedIndex = "0";
          document.getElementById("carrera").selectedIndex = "0";
          document.getElementById("departamento").selectedIndex = "0";


          $("#registro_simple input").removeAttr('disabled');
          $("#registro_simple select").removeAttr('disabled');
          $("#registro_simple input#click").removeAttr('disabled');
          $("#acepto").removeAttr('disabled');
        }
    })

  }else{
    alert("Ingrese su DNI");
  }

});


//limpiando los campos al iniciar el modal

$('#registro_simple #dni').val('');
$('#registro_simple #nombre').val('');
$('#registro_simple #apellido').val('');
$('#registro_simple #materno').val('');
$('#registro_simple #correo').val('');
$('#registro_simple #telefono').val('');
$('#registro_simple #colegio').val('');
$(".mensaje_evento").text('');
document.getElementById("egreso").selectedIndex = "0";
document.getElementById("carrera").selectedIndex = "0";
/*document.getElementById("departamento").selectedIndex = "0";*/


$('#registro_simple input').attr('disabled', 'disabled');
$('#registro_simple select').attr('disabled', 'disabled');
$("#registro_simple input#dni").removeAttr('disabled');

$('#acepto').attr('disabled', 'disabled');





$("#registro_simple").validate({
  rules: {
       dni: {
          required: true,
          minlength: 8,
          number:true
      },
       nombre: {
          required: true,
          minlength: 2
      },
      paterno: {
          required: true,
          minlength: 2
      },
      materno: {
          required: true,
          minlength: 2
      },
      correo: {
          required: true,
          email: true,
          minlength: 8
      },
      colegio: {
          required: true,
          minlength: 5
      },
      acepto: {
          required: true
      },
      telefono: {
          required: true,
          minlength: 7,
          maxlength: 9,
          number:true
      },
      egreso: {
        required: true,
        valueNotEquals: "0"
      },
      carrera: {
        required: true,
        valueNotEquals: "0"
      },
      departamento: {
        valueNotEquals: "0",
        required: true
      },
      departamento: {
        valueNotEquals: "0",
        required: true
      },
     /* fecha_nac: {
        required: true,
        date:true
      },*/
      distrito: {
        required: true,
        minlength: 4
      },
     
      message: "required"
  },
  messages: {
    nombre: "Por favor ingrese sus Nombres",
    paterno: "Por favor ingrese su apellido paterno",
    materno: "Por favor ingrese su apellido materno",
    correo: "Por favor ingrese su correo",
    telefono: "Por favor ingrese su teléfono",
    dni: "Por favor ingrese su DNI",
    egreso: "Por favor seleccione su Egreso",
    colegio: "Por favor ingrese su Colegio",
    carrera: "Por favor seleccione su Carrera",
    departamento: "Por favor seleccione su Departamento",
  //  fecha_nac: "Por favor seleccione su Fecha de Nacimiento",
    distrito: "Por favor ingrese su Distrito",
    acepto: "Por favor acepte los terminos"
    
  },
  errorPlacement: function(error, element) {
   if (element.attr("name") == "interes" ){
      error.insertAfter(".interes");
   }else if (element.attr("name") == "terminos" ){          
      error.insertAfter(".termino");
   }else if (element.attr("name") == "dni" ){          
      error.insertAfter(".g-dni");
   }else{
     error.insertAfter(element);
   }       
  },
  submitHandler: function(form) {

  	var dni = $('#dni').val();
    var nombre = $('#nombre').val();
    var paterno = $('#paterno').val();
    var materno = $('#materno').val();
    var telefono= $('#telefono').val();
    var correo= $('#correo').val();
    var egreso= $('#egreso').val();
    var carrera= $('#carrera').val();
    var colegio= $('#colegio').val();
    var departamento= $('#departamento').val();
    var post_id= $('#post_id').val();
    //var fecha_nac=$("#fecha_nac").val();
    var distrito=$("#distrito").val();
    var acepto= 0;
    if( $('#acepto').prop('checked') ) {
      acepto= 1;
    }

    var pronabec;

    if ($('#pronabec_landing').prop('checked')) {
      pronabec= "Si";
    }
    
    var titulo=$(".titulo").text();

    $.ajax({
        url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/registrarmundoudep_simple.php',
        type: 'POST',
        beforeSend: function() {
         $(':input[type="submit"]').prop('disabled', true);
         $(':input[type="submit"]').attr("value", "CARGANDO...");
        },
        data: {
          dni:dni,
          nombre:nombre,
          paterno:paterno,
          materno:materno,
          telefono:telefono,
          correo:correo,
          egreso:egreso,
          carrera:carrera,
          colegio:colegio,
          departamento:departamento,
          post_id:post_id,
          titulo:titulo,
          acepto:acepto,
         // fecha_nac:fecha_nac,
          distrito:distrito,
          pronabec:pronabec
        },
    })
    .done(function(data) {
     // console.log(data);
      var jsonData = JSON.parse(data);
      //alert(jsonData.dato);
      switch(jsonData.dato) {
       case "1":
         $(':input[type="submit"]').removeAttr('disabled');
        $(':input[type="submit"]').attr("value", "ENVIAR");
        $.redirect('https://www.udep.edu.pe/admision/lima/gracias-pre-registro/', {data:'1',tipo:'1',titulo:titulo,id_evento:post_id,post_id:post_id},"POST"); 

               /*  $.ajax({
            url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/correoregistro.php',
            type: 'POST',
            data: {
                         
              nombre: nombre,
              apellidosp: apellidosp,
              apellidosm: apellidosm,
              email: correo,
              dni: dni,          
            },
          })*/
        break;        
       case "2":
        $(':input[type="submit"]').removeAttr('disabled');
        $(':input[type="submit"]').attr("value", "ENVIAR");
        $(".mensaje_evento").text("Usted ya está registrado en este evento");
        break;  
       case "3": 
        $(':input[type="submit"]').removeAttr('disabled');
        $(':input[type="submit"]').attr("value", "ENVIAR");
        $(".mensaje_evento").text("Acepte lo términos y condiciones");
 
      }
  })
}

});



$("input[name='tipo']").change(function() {
    var valorSeleccionado = $("input[name='tipo']:checked").val();
   // console.log("Valor seleccionado: " + valorSeleccionado);

   if(valorSeleccionado == 2){ 
     $("#egreso").val("0");
     $("#carrera").val("0");
     $("#departamento").val("0");
    
     $("#dni").val("");
     $("#nombre").val("");
     $("#paterno").val("");
     $("#materno").val("");
     $("#telefono").val("");
     $("#correo").val("");
     $("#colegio").val("");
     //$("#fecha_nac").val("");
     $("#distrito").val("");

     //$("#egreso").prop("disabled", true);
   //  $("#carrera").prop("disabled", true);
    // $("#fecha_nac").prop("disabled", true);

     $("#colegio").attr("placeholder", "Colegio de su hijo(a)");

     $('#egreso option[value="0"]').text('Año de egreso de su hijo(a)');
     $('#carrera option[value="0"]').text('Carrera de su hijo(a)');
    

   }else{     
     $("#egreso").prop("disabled", false);
     $("#carrera").prop("disabled", false);
    // $("#fecha_nac").prop("disabled", false);
     
     $("#dni").val("");
     $("#nombre").val("");
     $("#paterno").val("");
     $("#materno").val("");
     $("#telefono").val("");
     $("#correo").val("");
     $("#colegio").val("");
  //   $("#fecha_nac").val("");

     $("#egreso").val("0");
     $("#carrera").val("0");
     $("#departamento").val("0");
     
     $("#colegio").val("");
     $("#distrito").val("");

     $("#colegio").attr("placeholder", "Colegio");

     $('#egreso option[value="0"]').text('Año de egreso');
     $('#carrera option[value="0"]').text('Carrera');
    

     
   }

});

 $("input[name='grupoRadio']").change(function() {
      // Obtener el valor del radio button seleccionado
      var opcionSeleccionada = $("input[name='grupoRadio']:checked").val();

      // Cambiar el placeholder del textbox según la opción seleccionada
      if (opcionSeleccionada === "opcion1") {
          $("#miTextbox").attr("placeholder", "Nuevo texto para opción 1");
      } else if (opcionSeleccionada === "opcion2") {
          $("#miTextbox").attr("placeholder", "Nuevo texto para opción 2");
      } else {
          // Si no se selecciona ninguna opción, se puede establecer un valor predeterminado
          $("#miTextbox").attr("placeholder", "Texto por defecto");
      }
  });


$("#registro_simple_landing").validate({
  rules: {
      
       nombre: {
          required: true,
          minlength: 2
      },
     /* apellidos: {
          required: true,
          minlength: 2
      },*/
      paterno: {
          required: true,
          minlength: 2
      },
      materno: {
          required: true,
          minlength: 2
      },
      correo: {
          required: true,
          email: true
      },
      telefono: {
          required: true,
          minlength: 7,
          maxlength: 9,
          number:true
      },
       dni: {
          required: true,
          minlength: 8,
          number:true
      },
      egreso: {
        required: true,
        valueNotEquals: "0"
      },
      carrera: {
        required: true,
        valueNotEquals: "0"
      },
      colegio: {
        required: true,
        minlength: 5
      },
      departamento: {
        required: true,
        valueNotEquals: "0"
      },
      acepto_landing: {
        required: true
      },
      /*fecha_nac: {
        required: true,
        date:true
      },*/
      distrito: {
        required: true,
        minlength: 4
      },
     
      message: "required"
  },
  messages: {
    nombre: "Por favor ingrese su Nombre",
    /*apellidos: "Por favor ingrese sus Apellidos",*/
    paterno: "Por favor ingrese su apellido paterno",
    materno: "Por favor ingrese su apellido materno",
    correo: "Por favor ingrese su correo",
    telefono: "Por favor ingrese su teléfono",
    dni: "Por favor ingrese su DNI",
    egreso: "Por favor seleccione su Egreso",
    carrera: "Por favor seleccione su Carrera",
    colegio: "Por favor ingrese su Colegio",
    //fecha_nac: "Por favor seleccione su Fecha de Nacimiento",
    distrito: "Por favor ingrese su Distrito",
    departamento: "Por favor seleccione su Departamento",
    acepto_landing: "Por favor acepte los terminos"  
  },
  errorPlacement: function(error, element) {
   if (element.attr("name") == "interes" ){
      error.insertAfter(".interes");
   }else if (element.attr("name") == "acepto_landing" ){          
      error.insertAfter(".text_termino");
   }else{
     error.insertAfter(element);
   }       
  },
  submitHandler: function(form) {
    var tipo_u = $("input[name='tipo']:checked").val();
    var dni = $('#dni').val();
    var nombre = $('#nombre').val();
    /*var apellidos = $('#apellidos').val();*/
    var paterno = $('#paterno').val();
    var materno = $('#materno').val();
    var telefono= $('#telefono').val();
    var correo= $('#correo').val();
    var egreso= $('#egreso').val();
    var carrera= $('#carrera').val();
    var colegio= $('#colegio').val();
    var departamento= $('#departamento').val();
    var post_id= $('#post_id').val();
    var titulo=$("#titulo_evento").val();
    //var fecha_nac=$("#fecha_nac").val();
    var distrito=$("#distrito").val();

    var pronabec;

    if ($('#pronabec_landing').prop('checked')) {
      pronabec= "Si";
    }

    $.ajax({
        url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/registrarmundoudep_simple_landing.php',
        type: 'POST',
         beforeSend: function() {
         $(':input[type="submit"]').prop('disabled', true);
         $(':input[type="submit"]').attr("value", "CARGANDO...");
        },
        data: {
          dni:dni,
          nombre:nombre,
          /*apellidos:apellidos,*/
          paterno:paterno,
          materno:materno,
          telefono:telefono,
          correo:correo,
          egreso:egreso,
          carrera:carrera,
          colegio:colegio,
          departamento:departamento,
          post_id:post_id,
          titulo:titulo,
          pronabec:pronabec,
          tipo_u:tipo_u,
          //fecha_nac:fecha_nac,
          distrito:distrito
        },
    })
    .done(function(data) {
     // console.log(data);
      var jsonData = JSON.parse(data);
      //alert(jsonData.dato);
      switch(jsonData.dato) {
       case "1":
       $(':input[type="submit"]').attr("value", "ENVIAR");
        //$.redirect('https://www.udep.edu.pe/admision/lima/gracias-pre-registro/', {data:'1',tipo:'2',titulo:titulo},"POST"); 
        $.redirect('https://www.udep.edu.pe/admision/lima/gracias-pre-registro?'+titulo, {tipo:'2',titulo:titulo,post_id:post_id},"POST"); 

               /*  $.ajax({
            url:'https://www.udep.edu.pe/admision/lima/wp-content/themes/udep/correoregistro.php',
            type: 'POST',
            data: {
                         
              nombre: nombre,
              apellidosp: apellidosp,
              apellidosm: apellidosm,
              email: correo,
              dni: dni,          
            },
          })*/
        break;        
       case "2":
       $(':input[type="submit"]').attr("value", "ENVIAR");
        $(".mensaje_landing").text("Usted ya está registrado en este landing");
 
      }
  })
}

});