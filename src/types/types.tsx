export interface ComponentType {
    setModalActive: (_: boolean) => void
    setIsLoggedIn: (_: boolean) => void
    isLoggedIn: boolean
}