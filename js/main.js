const today = new Date();
const partyDate = new Date(today);
partyDate.setDate(partyDate.getDate() + 9.25);

console.log(partyDate);
//--------------------------------------------

// for the letter counter

//set the characters automatically

const currentText = $('#textArea').attr('maxlength')
$('#letter_limiter').html(currentText)

//letter counter function
$('#textArea').keyup(function() {
    let type_length = $(this).val().length;
    let remaining_letter = currentText - type_length
    $('#letter_limiter').html(remaining_letter)
    if (remaining_letter == 0) {
        $('#textArea').attr({ 'style': "border: 3px solid red !important" })
        $('#characterSet').html(`<span class="text-danger font-weight-bold">Characters Exceeded</span>`)
    }

})

//--------------------------------------------

// navBar bg color change - btn up display
let event_offset = $(".event").offset().top;

$(window).scroll(function() {
    let top_scroll = $(this).scrollTop()
        //up-btn visibility
    if (top_scroll >= event_offset) {
        $(".up-btn").fadeIn(800)
    } else {
        $(".up-btn").fadeOut(800)

    }
    //navbar color change
    if (top_scroll > 400) {
        //navbar color
        $(".navbar").css({ "background-color": "white", "box-shadow": "0px 2px 14px 4px rgba(0,0,0,0.75)", "-moz-box-shadow": "0px 2px 14px 4px rgba(0,0,0,0.75)", "-webkit-box-shadow": "0px 2px 14px 4px rgba(0,0,0,0.75" })
            //nav items color
        $(".navbar .nav-item a").css("color", "#BD2871");
        // nav brand color
        $('.navbar .navbar-brand').css("color", "#BD2871");
    } else if (top_scroll < 500) {
        //navbar color
        $(".navbar").css({ "background-color": "rgba(255, 255, 255, 0)", "box-shadow": "none", "-moz-box-shadow": "none", "-webkit-box-shadow": "none" })
            //nav items color
        $(".navbar .nav-item a").css("color", "white");
        // nav brand color
        $('.navbar .navbar-brand').css("color", "white");
    }
})

//--------------------------------------------

// smooth scrolling

$(".navbar .nav-item a").click(function(e) {
    let section_href = $(this).attr("href");
    let section_offset = $(section_href).offset().top;
    $('html,body').animate({ scrollTop: section_offset - 50 }, 1500);
    //active tab coloring
    $(".navbar li a").removeClass('active-tab')
    $(this).addClass('active-tab')
})

//--------------------------------------------

//up btn action

$('.up-btn').click(() => {
    $("body,html").animate({ scrollTop: "0" }, 1500);
    $(".navbar li a").removeClass('active-tab')
})

//scroll-down action

$(".scroll-down").click(() => {
    let eventCounter_offset = $(".event-countDown").offset().top;
    $('html,body').animate({ scrollTop: eventCounter_offset - 300 }, 1500);
})


//--------------------------------------------

//join us action

$("#event_join").click(() => {
    $('html,body').animate({ scrollTop: event_offset - 60 }, 1500);
})

//--------------------------------------------

// event count down timer


$("#timer_countDown")
    .countdown(partyDate, function(event) {
        $("#days").text(
            event.strftime('%D')
        );
        $("#hrs").text(
            event.strftime('%H')
        );
        $("#min").text(
            event.strftime('%M')
        );
        $("#sec").text(
            event.strftime('%S')
        );
    });

//--------------------------------------------

//event date & time


//date builder

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date}/${month}/${year}`;
}

//time builder

$("#eventDate").text(dateBuilder(partyDate))
if (partyDate.getHours() > 12) {
    let event_time = partyDate.getHours() - 12 + ":" + partyDate.getMinutes();
    $(".event_time").text(`${event_time} pm`)

} else {
    let event_time = partyDate.getHours() + 12 + ":" + partyDate.getMinutes();
    $(".event_time").text(`${event_time} pm`)
}

//--------------------------------------------

//singers silde toggle
$("document").ready(() => {
    $(".singer_title").click(function() {
        $(this).next().slideToggle("slow");
    })
})

//--------------------------------------------