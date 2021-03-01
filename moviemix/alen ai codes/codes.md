### Codes to perform the functionality.

###### website: alan.app

// Use this sample to create your own voice commands
intent('What is (the|) (purpose|) (of|) (this|) (project|moviemix)', p =>{

    p.play('MovieMix is movies searching website.');
    p.play("It makes your task easier by integrating me here, to search in behalf of you by just your voice command.")
    p.play(" For knonwing all commands that I support, ask me show all your commands or click on the right top button")

});

// handle next button of home page
intent('(Go|) (to|) next (page|)',p=>{
p.play({command:'home-next'})
})

// handle direct back to home page from any page
intent('(Go|Direct|Return|) (back|) (to|) home (page|) (of|) (the|) (website|moviemix|) ',p=>{
p.play({command:'back-home'});
})

// handle to show possible commands of alan ai on moviemix
intent('(show | open) (all |) (possible|) (supported |) (commands|command)',p=>{
p.play({command:'show-commands'})
})

// handle to hide possible commands of alan ai on moviemix
intent('(close | hide) (all |) (commands|command)',p=>{
p.play({command:'hide-commands'})
})

// handle back going back
intent('(go|) (back| previous) (page|)',p=>{
p.play({command:'back'})
})

//handling forward command
intent("(go|move|) (to|) (previous|forward) (page|) ",p=>{
p.play({command:"forward"})
})

//handling api with genre command

const genreNames="$(GENRE_MOVIE trendings|top rated|Netflix | comedy | horror| romance|romantic)"
intent(`(show|Open) (list|) (of|) ${genreNames} (movie|movies|) (list|)`,p=>{
p.play({command:"show-genres",payload:{genreName:p.GENRE_MOVIE.value}})
})
