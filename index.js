var expression="";
// $("#inputId").keydown(function(event){
//   // var c=event.key;
//   // if((c>='A'&& c<='Z') || (c>='a' && c<='z'))
//   return false;
// });
$(".equal").on("click",function(){
var ans=parseFloat(eval(expression).toFixed(10));
$("#inputId").val(ans);
expression=ans;
});
$("#clear").on("click",function(){
$("#inputId").val("");
$("#inputId").attr("placeholder","0");
expression="";
});
$("#backspace").on("click",function(){
var val=$("#inputId").val();
val=val.slice(0,val.length-1);
expression=expression.slice(0,expression.length-1);
$("#inputId").val(val);
});
$(".key").on("click",function(){
  var val=$("#inputId").val();
  $("#inputId").val(val+this.value);
  expression=expression+this.value;
});
$("#rad").on("click",function(){
  var val=$("#rad").val();
  if(val==="Rad")
  val="Deg";
  else
  val="Rad";
  $("#rad").val(val);
});
$("#sin").on("click",function(){
  var val=$("#inputId").val();
  if($("#sin").val()==="sin")
  {
       $("#inputId").val(val+'sin(');
       if($("#rad").val()==="Deg")
        {
          expression=expression+'Math.sin((Math.PI/180)*';
        }
        else
        {
          expression=expression+'Math.sin(';

        }

  }
  else
  {
    $("#inputId").val(val+'arcsin(');
    if($("#rad").val()==="Deg")
    {
      expression=expression+'(180/Math.PI)*Math.asin(';
    }
    else
    {
      expression=expression+'Math.asin(';
    }
    // $("#close-bracket").on("click",function(){
    //   expression=expression+'.toFixed(3)';
    // });
  }
});
$("#cos").on("click",function(){
  var val=$("#inputId").val();
  if($("#cos").val()==="cos")
  {
    $("#inputId").val(val+'cos(');
    if($("#rad").val()==="Deg")
     {
       expression=expression+'Math.cos((Math.PI/180)*';

     }
     else
     {
       expression=expression+'Math.cos(';
       // $("#close-bracket").on("click",function(){
       //   expression=expression+'.toFixed(3)';
       // });
     }

  }
  else
  {
    $("#inputId").val(val+'arccos(');
    if($("#rad").val()==="Deg")
    {
      expression=expression+'(180/Math.PI)*Math.acos(';
    }
    else
    {
      expression=expression+'Math.acos(';
    }
  }
});
$("#tan").on("click",function(){
  var val=$("#inputId").val;
  if($("#tan").val()==="tan")
  {
    $("#inputId").val(val+'tan(');
    if($("#rad").val()==="Deg")
     {
       expression=expression+'Math.tan((Math.PI/180)*';
       // $("#close-bracket").on("click",function(){
       //   expression=expression+'.toFixed(3)';
       // });
     }
     else
     {
       expression=expression+'Math.tan(';
     }

  }
  else{
    $("#inputId").val(val+'arctan(');
    if($("#rad").val()==="Deg")
    {
      expression=expression+'(180/Math.PI)*Math.atan(';
    }
    else
    {
      expression=expression+'Math.atan(';
    }
  }
});
$("#power").on("click",function(){
  var val=$("#inputId").value;

  $("#inputId").val(val+'^(');
  expression=eval(expression);
  expression='Math.pow('+expression+',';
});
$("#ln").on("click",function(){
  var val=$("#inputId").val();
  if($("#ln").val()==="ln")
  {
  expression=expression+'Math.log('
  $("#inputId").val(val+'ln(');
  }
  else
  {
    expression=expression+'Math.exp(';
    $("#inputId").val(val+'e^(');
  }
});
$("#log").on("click",function(){
  var val=$("#inputId").val();
  if($("#log").val()==="log")
  {
    expression=expression+'Math.log10(';
  $("#inputId").val(val+'log(');
  }
  else{
    expression=expression+'Math.pow(10,';
    $("#inputId").val(val+'10^(');
  }
});
$("#pi").on("click",function(){
  var val=$("#inputId").val();
  expression=expression+'Math.PI'
  $("#inputId").val(val+'π');
});
$("#sqrt").on("click",function(){
  var val=$("#inputId").val();
  if($("#sqrt").val()==="sqrt")
  {
  expression=expression+'Math.sqrt(';
  $("#inputId").val(val+'sqrt(');
  }
  else
  {
    expression=eval(expression);
    $("#inputId").val(Math.pow(expression,2));
    expression=Math.pow(expression,2);
  }
});
 $("#reverse").on("click",function(){
   expression=eval(expression);
  $("#inputId").val(1/expression);
   expression=1/expression;
 });
$("#exp").on("click",function(){
  var val=$("#inputId").val();
  expression=expression+'Math.exp(1)'
  $("#inputId").val(val+'e');
});
$("#modulus").on("click",function(){
  var val=$("#inputId").val();
  expression=expression+'%'
  $("#inputId").val(val+'Mod');
});
$("#percent").on("click",function(){
  expression=eval(expression);
  $("#inputId").val(expression/100);
  expression=expression/100;
});
function factorial(n)
{
  if(n===0)
  return 1;
  var ans=1;
  for(var i=1;i<=n;i++)
  ans=ans*i;
  return ans;
}
$("#fact").on("click",function(){
  expression=eval(expression);
  $("#inputId").val($("#inputId").val()+'!');
  expression=factorial(expression);
  // document.getElementById("inputId").value=expression;
});
$("#inv").on("click",function(){
  if($("#inv").hasClass("btn"))
  {
    $("#inv").removeClass("btn , btn-secondary");
    $("#sqrt").val("sqrt");
    $("#ln").val("ln");
    $("#log").val("log");
    $("#sin").val("sin");
    $("#cos").val("cos");
    $("#tan").val("tan");
  }
  else
  {
    $("#inv").addClass("btn , btn-secondary");
    $("#sqrt").val("x²");
    $("#ln").val("e^");
    $("#log").val("10^");
    $("#sin").val("sin⁻¹");
    $("#cos").val("cos⁻¹");
    $("#tan").val("tan⁻¹");
  }
});
