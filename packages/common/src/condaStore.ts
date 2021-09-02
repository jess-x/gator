export namespace CondaStore {
    export async function fetchEnvironments(): Promise<Array<{
        build_id: number,
        id: number,
        name: string,
        namespace: {
            id: number,
            name: string,
        }
    }>> {
        const result = await fetch('localhost:5000/api/v1/environment/')
        if (result.ok) {
            return await result.json()
        } else {
            return []
        }
    }

    export async function fetchEnvironmentPackages(envNamespace: string, envName: string): Promise<Array<{
        channel_id: number,
        id: number,
        license: string,
        name: string,
        sha256: string,
        version: string,
    }>> {
        const result = await fetch(`localhost:5000/api/v1/environment/${envNamespace}/${envName}/`)
        if (result.ok) {
            const {packages} = await result.json()
            return packages
        } else {
            return []
        }
    }
}
