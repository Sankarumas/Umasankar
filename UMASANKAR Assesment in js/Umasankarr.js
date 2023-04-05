window.onload=function()
{
    document.getElementById("b1").onclick=form;
}
function  form()
{
    var Aname =document.getElementById("Aname").value
    var Bname=document.getElementById("Bname").value
    var email=document.getElementById("email").value
    var p1=document.getElementById("p1").value
    var p2=document.getElementById("p2").value
    var age=document.getElementById("age").value
    var number=document.getElementById("number").value
    var numberr=document.getElementById("numberr").value
    var dob=document.getElementById("dob").value
    var w1=document.getElementById("w1").value
    var city=document.getElementById("city").value
    var zip=document.getElementById("zip").value

    
    var s1=document.getElementById("s1")
    var s2=document.getElementById("s2")
    var s3=document.getElementById("s3")
    var s4=document.getElementById("s4")
    var s5=document.getElementById("s5")
    var s12=document.getElementById("s12")
    var s6=document.getElementById("s6")
    var s7=document.getElementById("s7")
    var s8=document.getElementById("s8")
    var s11=document.getElementById("s11")
    var s9=document.getElementById("s9")
    var s10=document.getElementById("s10")
    var s11=document.getElementById("s11")
    var s=document.getElementsByTagName("span")
    var checked=document.getElementById("checkbox")


    var letter=/^[a-zA-Z\s]{1,30}$/i;
    var letters=/^[a-zA-Z\s]{1,30}$/i;
    var Mail=/^([a-z A-Z 0-9 \. _]+)@([a-z A-z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/
    var password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@\$!%\*\?&])[A-Za-z\d@\$!%\*\?&]{8,16}$/
    var contactno =/^[6-9]\d{9}$/;
    var landlineno =/^[0-9]\d{2,5}-\d{6}$/;
    var website=(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    var zipcode =/^[1-9][0-9]{5}$/;
    
    
    if(Aname.trim()==" " && Bname.trim()==" " && email.trim()==" " && p1.trim()==""&& p2.trim()==""&& age.trim()=="" && number.trim()==""  && numberr.trim()==""  && dob.trim()==""
    && w1.trim()=="" && city.trim()=="" && zip.trim()==""){
      s1.innerText="Required"
      s2.innerText=" Required"
      s3.innerText=" Required"
      s4.innerText=" Required"
      s5.innerText=" Required"
      s6.innerText=" Required"
      s7.innerText=" Required"
      s8.innerText=" Required"
      s9.innerText=" Required"
      s10.innerText=" Required"
      s11.innerText=" Required"
      s12.innerText="Required"
  }
  else{
    if(Aname.trim()=="")
    s1.innerText=" Required"
    else if(letter.test(Aname))
    s1.innerText=""
    else
    s1.innerText=" Enter Valid First Name"

    if(Bname.trim()=="")
    s2.innerText="Required"
    else if(letters.test(Bname))
    s2.innerText=''
    else
    s2.innerText=" Enter Valid Last Name"

    if(email.trim()=="")
    s3.innerText="Required"
    else if(Mail.test(email))
    s3.innerText=""
    else
    s3.innerText=" Enter valid email Id"

    

    if(p1.trim()=="")
    s4.innerText="Required"
    else if(password.test(p1)){
      s4.innerText=""
      if(p2.trim()=="")
        s5.innerText=" Confirm the password"
      else if(p1==p2)
        s5.innerText=""
      else
        s5.innerText="Password does not match"
    }
    else
    ptext.innerText=" Password should contain min 8 characters"
    
    if(age.trim()=="")
    s12.innerText="Required"
    else if(age>=18)
    s12.innerText=""
    else
    s12.innerText="Minimum Age should be 18"

    if(number.trim()=="")
    s6.innerText="Required"
    else if(contactno.test(number))
    s6.innerText=""
    else
    s6.innerText="Enter valid Mobile Number"

    if(numberr.trim()=="")
    s7.innerText="Required"
    else if(landlineno.test(numberr))
    s7.innerText=""
    else
    s7.innerText=" Enter valid Mobile Number"

    if(dob.trim()=="")
    s8.innerText="Required"
    else 
    s8.innerText=""

    if(w1.trim()=="")
    s11.innerText="Required"
    else if(website.test(w1))
    s11.innerText=""
    else
    s11.innerText=" Enter valid website"

    if(city.trim()=="")
    s9.innerText="Required"
    else
    s9.innerText=""

    if(zip.trim()=="")
    s10.innerText="Required"
    else if(zipcode.test(s10))
    s10.innerText=""
    else
    s10.innerText=" Enter valid zip code"

    if(!checked)
    {
      alert("please select the terms and condition");
      return false;
    }

    Bool=true
    for(i=0;i<n;i++){

        if(!s[i].innerText=="")
        Bool=false

    }
    if(Bool)
    document.write("sumitted")

    }
  }