package com.example.note.repositories;

import com.example.note.domain.Note;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

@org.springframework.stereotype.Repository
public interface NoteRepository extends Repository<Note, Long> {
    List<Note> findAll();
    Note findNoteById(Long id);

    Note save(Note note);

    void deleteById(Long id);

    @Query("select n from Note n where n.title like CONCAT('%',:keyword,'%') or n.content like  CONCAT('%',:keyword,'%')")
    List<Note> findNoteByKeyword(String keyword);
}
