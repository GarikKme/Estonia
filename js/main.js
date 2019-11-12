$(function () {

	//nav

	$('.menu-icon').on('click', function () {
		$('.header__navBox').slideToggle();
	});

	// Menu Scroll to section	

	$(' a[href^="#"').click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1500);

		return false;
	});


	// member2
	$('.addNewPerson').on('click', function (e) {
		e.preventDefault();
		var new_person = $(".clone-form").clone(); // Дублирует DIV с классом .clone-form и заносит в переменную new_person
		new_person.find('input').val(''); // Ищет все инпуты внутри скопированной формы и очищает, очищаются только в дубликате, в родителе ничего не чистится
		new_person.removeClass('clone-form'); // Удаляем класс .clone-form чтобы при следующем клонировании не клонировалось несколько форм.
		new_person.insertAfter(".all-forms .cloned-inputs:last"); // Добавляем скопированную форму в конец всех копий
		new_person.find('.removePerson').on('click', function (e) { // Привязываем к кнопку удаления функцию удаления
			e.preventDefault();
			e.target.parentNode.remove(); // Поиск родителя и удаление его
		});
	});

	// member2-mobile
	$('.addNewPerson1').on('click', function (e) {
		e.preventDefault();
		var new_person = $(".clone-form1").clone(); // Дублирует DIV с классом .clone-form и заносит в переменную new_person
		new_person.find('input').val(''); // Ищет все инпуты внутри скопированной формы и очищает, очищаются только в дубликате, в родителе ничего не чистится
		new_person.removeClass('clone-form1'); // Удаляем класс .clone-form чтобы при следующем клонировании не клонировалось несколько форм.
		new_person.insertAfter(".all-forms1 .cloned-inputs1:last"); // Добавляем скопированную форму в конец всех копий
		new_person.find('.removePerson1').on('click', function (e) { // Привязываем к кнопку удаления функцию удаления
			e.preventDefault();
			e.target.parentNode.remove(); // Поиск родителя и удаление его
		});
	});

	
	//Slider
	$('.slider').slick({
		vertical: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false,
		adaptiveHeight: false,
		prevArrow: '<i class="fal fa-angle-up"></i>',
		nextArrow: '<i class="fal fa-angle-down"></i>'
	});

	
	// accord
	$(".accord__question").on("click", function () {
		$(this).next().stop(true).slideToggle(300);
		$(this).find('.image').fadeToggle(-100);
		$(this).find('.elips').fadeToggle(300);
		$(this).toggleClass('accordion_open');
	});
});


// Info
// $(function() {
// 	$(".fa-info-circle, .form__info").click(function(e) {
// 		e.preventDefault();
// 		$(this).parent().find('.info-block, .form__info').toggle(500);

// 	});

// });	