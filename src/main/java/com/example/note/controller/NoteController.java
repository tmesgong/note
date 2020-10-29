package com.example.note.controller;

import com.example.note.domain.Note;
import com.example.note.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
public class NoteController {
    private final NoteRepository noteRepository;

    @Autowired
    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @PostMapping
    @PutMapping
    void addOrUpdateNote(Note note){
        noteRepository.save(note);
    }

    @DeleteMapping("/{id}")
    boolean deleteNote(@PathVariable("id")Long id){
        try {
            noteRepository.deleteById(id);
            return true;
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
    @GetMapping("/{id}")
    Note findNoteById(@PathVariable("id")Long id){
        return noteRepository.findNoteById(id);
    }

    @GetMapping
    List<Note> findNotes(){
        return noteRepository.findAll();
    }


    @PostMapping("/search")
    List<Note> findNoteByTitle(String q){
        return noteRepository.findNoteByKeyword(q);

    }

}
