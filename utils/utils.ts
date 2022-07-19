class Utils {
    static openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
}

export default Utils;