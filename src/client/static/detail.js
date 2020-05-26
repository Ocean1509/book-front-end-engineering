$('#delete').click(() => {
  let id = $('#delete').attr('data-id');
  console.log(id)
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

$('#edit').click(() => {
  let id = $('#delete').attr('data-id');
  location.href = `/create/${id}`
})