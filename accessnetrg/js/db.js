db.collection('events').onSnapshot(snapshot => {
  // Handle the latest event
  const newestEvent = snapshot.docChanges()[0].doc.data()
  const id = snapshot.docChanges()[0].doc.id
  showLatestEvent(newestEvent, id);

  // shift the latest event element
  snapshot.docChanges().shift()

  snapshot.docChanges().forEach(event => {
    showEvents(event.doc.data(), event.doc.id)
  });
})

const addNewEvent = () => {
  const event = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    description: form.description.value,
  }
  db.collection('events').add(event)
    .then(() => {
      // Reset the form values
      form.name.value = "",
        form.email.value = ""
      form.phone.value = "",
        form.description.value = "",

        swal("thank you!", "your idea has been sent", "success");
    })
    .catch(err => console.log(err))
}