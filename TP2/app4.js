async function deleteSuperHero(nombreSuperHeroe) {
    try {
        const result = await Superhero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });

        if (result.deletedCount > 0) {
            console.log(`✅ Superhéroe "${nombreSuperHeroe}" eliminado correctamente.`);
        } else {
            console.log(`⚠️ No se encontró el superhéroe "${nombreSuperHeroe}".`);
        }
    } catch (error) {
        console.error('❌ Error al eliminar el superhéroe:', error);
    }
}

// Llamar a la función para eliminar a "Spiderman"
deleteSuperHero('67cccb01601d2af9d3d20e67');
