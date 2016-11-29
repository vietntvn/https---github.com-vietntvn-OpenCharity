
$(document).ready(function(){
		$('a.view-more-lyric').click(function () {
		$(this).parent().find('.info-content').toggleClass('hide-content');
		if ($(this).hasClass('show')) {
			$(this).html('«&nbsp; Rút gọn').removeClass('show');
		} else {
			$(this).html('»&nbsp; Xem toàn bộ').addClass('show');
		}
		});
		//thongnq1 view more event
		$('a.view-more-event').click(function () {
		$(this).parent().find('.info-content').toggleClass('event-hide-content');
		if ($(this).hasClass('show')) {
			$(this).html('«&nbsp; Rút gọn').removeClass('show');
		} else {
			$(this).html('»&nbsp; Xem toàn bộ').addClass('show');
		}
		});
	});