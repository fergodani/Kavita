using System;
using System.ComponentModel.DataAnnotations;
using API.Entities.Interfaces;

namespace API.Entities;

public class UserBookNote : IEntityDate
{
    /// <summary>
    /// Volume chapter note
    /// </summary>
    public string Note { get; set; } = string.Empty;
    /// <summary>
    /// Chapter page
    /// </summary>
    [Key]
    public int Page { get; set; }

    // Relationships
    public Volume Volume { get; set; } = null!;
    [Key]
    public int VolumeId { get; set; }

    public AppUser AppUser { get; set; } = null!;
    public int AppUserId { get; set; }

    public DateTime Created { get; set; }
    public DateTime LastModified { get; set; }
    public DateTime CreatedUtc { get; set; }
    public DateTime LastModifiedUtc { get; set; }
}
