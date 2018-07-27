const $ = require('jquery');

export default function ResetModal() {
  $('#exampleModalCenter').on('hidden.bs.modal', (e) => {
	  $('.newInputClass').val('');
	  $('#newTitle').val('');
	  $('.newInnerCheck').prop('checked', false);
	  $('.dynLi').remove();
  });

  $('#exampleModalCenter').on('shown.bs.modal', () => {
	  $('#newTitle').trigger('focus');
  });
}
