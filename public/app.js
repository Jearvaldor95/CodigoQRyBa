function init(){
    $("#impriBar").hide();
	$("#impriQR").hide();
}
//función para generar el código de barras
function generarbarcode()
{
	codigo=$("#codigo").val();
	JsBarcode("#barcode", codigo);
	//$("#barcode").barcode(codigo,'ean8');
	$("#print").show();
}

//funcion para generar codigo QR
function generarqrcode()
{
	codigo=$("#codigo").val();
	$("#qrcode").qrcode({'text':codigo});
	$("#print").show();
}

function validarCodigoQR(){
	$("#qrcode").hide();
	$("#qrcode").html("");
	$("#barcode").show();
	$("#impriBar").show();
	$("#impriQR").hide();
}

function validarCodigoBar(){
	$("#barcode").hide();
	$("#qrcode").show();
	$("#impriQR").show();
	$("#impriBar").hide();
}

//Función para imprimir el Código de barras
function imprimirBar()
{
	$("#print").printArea();
}
//Imprimir el codigo QR
function imprimirQR()
{
	printJS('print','html');
}

function cancelar(){
    $("#codigo").val("");
    $("#print").hide();
    $("#impriBar").hide();
	$("#impriQR").hide();
}
init();