$('#submit').click(() => {
  let data = {
    name: $('#name').val(),
    author: $('#author').val(),
    isbn: $('#isbn').val(),
    price: $('#price').val(),
    memo: $('#memo').val(),
    create_date: $('#create_date').val(),
  }
  if ($('#submit').attr('data-id') === 'put') {
    data.id = $('#name').attr('data-id')
    $.ajax({
      url: 'http://localhost:3001/book',
      data,
      method: 'put',
      dataType: "json",
      success(res) {
        if (res.success) {
          location.href = `/detail/${res.data.id}`
        }
      },
      error(e) {
        alert(e)
      }
    })
  } else {
    $.ajax({
      url: 'http://localhost:3001/book',
      data,
      method: 'post',
      dataType: "json",
      success(res) {
        if (res.success) {
          location.href = `/detail/${res.data.id}`
        }
      },
      error(e) {
        alert(e)
      }
    })
  }

  return false
})