export const sortByDate = (slots: any) => {
    return slots.map((v: any) => {
        return {
            name: v.name,
            type: v.type,
            id: v.id,
            timeSlots: v.time_slots.sort((a: any, b: any) => {
                return new Date(a.start_time).valueOf() - new Date(b.start_time).valueOf()
            })
        }

    })
}