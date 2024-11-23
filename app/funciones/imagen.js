export async function Base64(imagenUrl) {
    try {
        // Obtener la imagen desde la URL como un Blob
        const response = await fetch(imagenUrl);
        const blob = await response.blob();

        // Crear un objeto FileReader para convertir el Blob a Base64
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onloadend = () => {
                // Esta es la cadena Base64
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error('Error al convertir la imagen a Base64:', error);
        return null;
    }
}

export default Base64;