const styles = {
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#F0F0F5'
    },
    main: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: '#322153',
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: -70,
        marginLeft: 45
    },
    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 1,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
        marginLeft: 160
    },
    footer: {},
    select: {},
    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
    },
    buttonReturn: {
        backgroundColor: '#add8e6',
        height: 60,
        flexDirection: 'row',
        borderRadius: 50,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonNext: {
        backgroundColor: '#ff007f',
        height: 60,
        flexDirection: 'row',
        borderRadius: 50,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
}

export default styles;