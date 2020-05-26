console.log(window)

$(document).ready(function () {
  $('#create').click(function () {
    location.href = '/create'
  })
  $('.edit').click(function () {
    let id = $(this).attr('data-id')
    location.href = `/create/${id}`
  })
  $('.delete').click(function () {
    let id = $(this).attr('data-id');
    $.ajax({
      url: '/book',
      method: 'delete',
      data: {
        id
      },
      dataType: "json",
      success(res) {
        if (res.success) {
          location.href = `/list`
        }
      },
      error(e) {
        console.log(e)
      }
    })
  })
})