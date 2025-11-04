const db = require("../models/database");
const Song = db.Song;

const getSongs = async (req, res) => {
  try {
    const songs = await Song.findAll({
      order: [["createdAt", "DESC"]],
    });

    res.json({
      ok: true,
      songs,
    });
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({
      ok: false,
      error: "Error fetching songs",
      details: error.message,
    });
  }
};

const getSongById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const song = await Song.findByPk(id);

    if (!song) {
      return res.status(404).json({
        ok: false,
        error: "Song not found",
      });
    }

    res.json({
      ok: true,
      song,
    });
  } catch (error) {
    console.error("Error fetching song:", error);
    res.status(500).json({
      ok: false,
      error: "Error fetching song",
      details: error.message,
    });
  }
};

module.exports = {
  getSongs,
  getSongById,
};
