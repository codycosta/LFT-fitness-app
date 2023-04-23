// page transition loader file

export const load = ({ url }) => {
    const { pathname } = url;
    
    return {pathname};
}
