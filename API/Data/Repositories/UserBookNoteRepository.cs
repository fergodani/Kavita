
using API.Data;
using API.Entities;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
namespace API.Data.Repositories;

public interface IUserBookNoteRepository
{
    void Add(UserBookNote userBookNote);
    void Update(UserBookNote userBookNote);
    Task<UserBookNote> GetBookNoteByVolumeIdAndPage(int volumeId, int page);
}

public class UserBookNoteRepository : IUserBookNoteRepository
{
    private readonly DataContext _context;

    public UserBookNoteRepository(DataContext context)
    {
        _context = context;
    }

    public void Add(UserBookNote userBookNote)
    {
        _context.UserBookNote.Add(userBookNote);
    }

    public void Update(UserBookNote userBookNote)
    {
        _context.UserBookNote.Update(userBookNote);
    }

    public Task<UserBookNote> GetBookNoteByVolumeIdAndPage(int volumeId, int page)
    {
        return _context.UserBookNote
            .Where(ubn => ubn.VolumeId == volumeId && ubn.Page == page)
            .FirstOrDefaultAsync();
    }
}
