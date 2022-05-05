$(document).ready(function () {
  $("#submit-btn").click(function () {
    let emailTag = $("#clientEmail");
    let nameTag = $("#nameField");
    let phoneTag = $("#clientPhone");
    let linkTag = $("#linkField");
    let check_value = $(".radio-2:checked").val();
    let check_value_1 = $(".radio:checked").val();
    let check_value_other_radio = $(".other_radio:checked").val();
    let rate = $("#HourlyRate");
    let other_sourceTag = $("#otherSource");
    let radio_define_check = $("input[name='Define_Yourself']:checked").length;
    let availableHrs_radio = $("input[name='available_hrs']:checked").length;
    let availability_radio = $("input[name='availability']:checked").length;
    let technology_radio = $("input[name='technology']:checked").length;
    let source_radio = $("input[name='source']:checked").length;
    
    if (radio_define_check === 0) {
      $("#radio-error").html("Please select one.");
    }
    if (check_value_1 === "Freelancer") {
      if (availableHrs_radio === 0) {
        $("#available-hrs-error").html("Please select one.");
      }
      if (availability_radio === 0) {
        $("#availability-error").html("Please select one.");
      }
      if (technology_radio === 0) {
        $("#technology-error").html("Please select one.");
      }
      if (source_radio === 0) {
      $("#source-error").html("Please select one.");
      }
    }

    $("input[type=radio][name=Define_Yourself]").on("change", function () {
      radio_define_check = $("input[name='Define_Yourself']:checked").length;
      if (radio_define_check !== 0) {
        $("#radio-error").html("");
        $("#hourly-rate-error").html("");
        $("#team-size-error").html("");
        $("#available-hrs-error").html("");
        $("#availability-error").html("");
        $("#technology-error").html("");
        $("#source-error").html("");
        $("#otherSource-error").html("");
      }
    });

    if (check_value === "Agency/Company") {
      let teamSize = $("#teamSize option:selected").index();
      if (teamSize === 0) {
        $("#team-size-error").html(
          "Please provide the size of your organization."
        );
        return false;
      } else {
        $("#team-size-error").html("");
        return true;
      }
    }

    (function () {
      let check_value = $(".radio:checked").val();
      let other_sourceTag = $("#otherSource");
      let check_value_other_radio = $(".other_radio:checked").val();
      if (check_value === "Freelancer" && check_value_other_radio === "Others") {
        let other_sourceCheck = /^[a-zA-Z\s]*$/;
        if (
          other_sourceTag.val() === "" ||
          other_sourceTag.val() === undefined ||
          !other_sourceTag.val().match(other_sourceCheck)
        ) {
          other_sourceTag.css("border-color", "red");
          $("#otherSource-error").html("Please specify the other source.");
          return false;
        }else {
          $("#otherSource-error").html("");
          return true;
        }
      }
      })();
    

    other_sourceTag.keyup(function (e) {
      let other_sourceCheck = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (other_sourceTag.val().match(other_sourceCheck)) {
        other_sourceTag.css("border-color", "#2869FE");
        $("#email-error").html("");
        return true;
      } else {
        other_sourceTag.css("border-color", "red");
        $("#email-error").html("Please provide a valid email address");
        return false;
      }
    });

    if (check_value_1 === "Freelancer") {
      let hourlyrateTag = $("#HourlyRate");
      if ( hourlyrateTag.val() === "" || hourlyrateTag.val() === undefined) {
        $("#hourly-rate-error").html(
          "Please provide the hourly rate in USD.");
        return false;
      } else {
        $("#hourly-rate-error").html("");
        return true;
      }
    }

    rate.keyup(function (e) {
      if (rate.val()==="" || rate.val() === undefined) {
        rate.css("border-color", "red");
        $("#hourly-rate-error").html("Please provide the hourly rate in USD.");
        return false;
      } else {
        rate.css("border-color", "#2869FE");
        $("#hourly-rate-error").html("");
        return true;
      }
    });

    $("input[type=radio][name=available_hrs]").on("change", function () {
      let check_value_1 = $(".radio:checked").val();
      let radio_available_hrs_check = $("input[name='available_hrs']:checked").length;
      if (check_value_1 === "Freelancer") {
        if (radio_available_hrs_check === 0 || radio_available_hrs_check === "" || radio_available_hrs_check === undefined) {
          $("#available-hrs-error").html("Please select one.");
          return false;
        } else{
          $("#available-hrs-error").html("");
          return true;
        }
      }
    });

    $("input[type=radio][name=availability]").on("change", function () {
      let check_value_1 = $(".radio:checked").val();
      let radio_availability_check = $("input[name='availability']:checked").length;
      if (check_value_1 === "Freelancer") {
        if (radio_availability_check === 0 || radio_availability_check === "" || radio_availability_check === undefined) {
          $("#availability-error").html("Please select one.");
          return false;
        } else{
          $("#availability-error").html("");
          return true;
        }
      }
    });

    $("input[type=radio][name=technology]").on("change", function () {
      let check_value_1 = $(".radio:checked").val();
      let radio_technology_check = $("input[name='technology']:checked").length;
      if (check_value_1 === "Freelancer") {
        if (radio_technology_check === 0 || radio_technology_check === "" || radio_technology_check === undefined) {
          $("#technology-error").html("Please select one.");
          return false;
        } else{
          $("#technology-error").html("");
          return true;
        }
      }
    });

    $("input[type=radio][name=source]").on("change", function () {
      let check_value_1 = $(".radio:checked").val();
      let radio_source_check = $("input[name='source']:checked").length;
      if (check_value_1 === "Freelancer") {
        if (radio_source_check === 0 || radio_source_check === "" || radio_source_check === undefined) {
          $("#source-error").html("Please select one.");
          return false;
        } else{
          $("#source-error").html("");
          return true;
        }
      }
    });

    $("#teamSize").on("change", function (e) {
      let teamSize = $("#teamSize option:selected").index();
      // console.log(teamSize);
      if (teamSize > 0) {
        $("#team-size-error").html("");
        return true;
      }
    });

    let emailCheck = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (
      emailTag.val() === "" ||
      emailTag.val() === undefined ||
      !emailTag.val().match(emailCheck)
    ) {
      emailTag.css("border-color", "red");
      $("#email-error").html("Please provide a valid email address.");
    }
    let nameCheck = /^[a-zA-Z\s]*$/;
    if (
      nameTag.val() === "" ||
      nameTag.val() === undefined ||
      !nameTag.val().match(nameCheck)
    ) {
      nameTag.css("border-color", "red");
      $("#name-error").html("Name can't be empty.");
    }
    let phoneNoCheck = /^\+?\d{7,15}$/;
    if (
      phoneTag.val() === "" ||
      phoneTag.val() === undefined ||
      !phoneTag.val().match(phoneNoCheck)
    ) {
      phoneTag.css("border-color", "red");
      $("#phone-error").html("Please provide a valid phone number.");
    }

    nameTag.keyup(function (e) {
      let nameCheck = /^[a-zA-Z\s]*$/;
      if (nameTag.val().match(nameCheck)) {
        nameTag.css("border-color", "#2869FE");
        $("#name-error").html("");
        return true;
      } else {
        nameTag.css("border-color", "red");
        $("#name-error").html("Name can't be empty.");
        return false;
      }
    });

    emailTag.keyup(function (e) {
      let emailCheck = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (emailTag.val().match(emailCheck)) {
        emailTag.css("border-color", "#2869FE");
        $("#email-error").html("");
        return true;
      } else {
        emailTag.css("border-color", "red");
        $("#email-error").html("Please provide a valid email address");
        return false;
      }
    });

    phoneTag.keyup(function (e) {
      let phoneNoCheck = /^\+?\d{7,15}$/;
      if (phoneTag.val().match(phoneNoCheck)) {
        phoneTag.css("border-color", "#2869FE");
        $("#phone-error").html("");
        return true;
      } else {
        phoneTag.css("border-color", "red");
        $("#phone-error").html("Please provide a valid phone number.");
        return false;
      }
    });

    linkTag.keyup(function (e) {
      //let linkcheck = /^(http(s)?:\/\/)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      //let linkcheck = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z][_-]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
      let linkCheck =
          /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      if (linkTag.val().match(linkCheck)) {
        linkTag.css("border-color", "#2869FE");
        $("#link-error").html("");
        return true;
      } else {
        linkTag.css("border-color", "red");
        $("#link-error").html("Please provide a valid url.");
        return false;
      }
    });
  });
});

$('#nameField').focusin(  
  function(){  
    document.getElementById("name-label").style.color = "#1d4ed8";
  }).focusout(  
  function(){  
    document.getElementById("name-label").style.color = "#ffffff";
  });
$('#clientEmail').focusin(  
  function(){  
    document.getElementById("email-label").style.color = "#1d4ed8";
  }).focusout(  
  function(){  
    document.getElementById("email-label").style.color = "#ffffff";
  });
$('#clientPhone').focusin(  
  function(){  
    document.getElementById("phone-label").style.color = "#1d4ed8";
  }).focusout(  
  function(){  
    document.getElementById("phone-label").style.color = "#ffffff";
  });
$('#linkField').focusin(  
  function(){  
    document.getElementById("link-label").style.color = "#1d4ed8";
  }).focusout(  
  function(){  
    document.getElementById("link-label").style.color = "#ffffff";
  });
$('#teamSize').focusin(  
  function(){  
    document.getElementById("team-label").style.color = "#1d4ed8";
  }).focusout(  
  function(){  
    document.getElementById("team-label").style.color = "#ffffff";
  });
$('#otherSource').focusin(  
function(){  
  document.getElementById("source-label").style.color = "#1d4ed8";
}).focusout(  
function(){  
  document.getElementById("source-label").style.color = "#ffffff";
});

$('.form-hfu').submit(()=>{
  disableScroll();
  function disableScroll() {
    // Get the current page scroll position
    scrollTop = 
      window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = 
      window.pageXOffset || document.documentElement.scrollLeft,
      // if any scroll is attempted,
      // set this to the previous value
      window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = function() {};
  }
  setTimeout(()=>{
    $('.form-success-trigger-lf').click();
    enableScroll();
  },800);
});
