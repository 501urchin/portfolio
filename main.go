package main

import (
	"embed"
	"fmt"
	"io/fs"
	"log"
	"net/http"

	_ "embed"

	"github.com/a-h/templ"
)

//go:embed public/**
var publicFolderEmbed embed.FS

func main() {
	publicFs, err := fs.Sub(publicFolderEmbed, "public")
	if err != nil {
		log.Fatal(err)
	}

	fs := http.FileServer(http.FS(publicFs))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.Handle("/", templ.Handler(App()))

	fmt.Println("Listening on http://localhost:3000")
	err = http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatalln("failed to start portfolio: ", err.Error())
	}
}
