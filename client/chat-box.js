const
 post = ({ message }) => echo(message)[0].frameUp();
/* TODO:
db.value.forEach(post)
ON['chat message'](_ => {
 post(_)
 db.value.push(_)
 db.save()
}) */