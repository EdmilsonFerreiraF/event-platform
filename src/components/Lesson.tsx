import { ArrowFatLeft, CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom';
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export const Lesson = (props: LessonProps) => {
    const isLessonAvailable = isPast(props.availableAt)
    const currentPath = useParams().slug
    const isCurrentPath = currentPath === props.slug
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className={`relative ${isCurrentPath ? 'bg-green-300' : 'bg-gray-700'} rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500`}>
                {isCurrentPath && (
                    <ArrowFatLeft className="text-green-300 absolute left-[-12px] top-[34px] z-[-0]" size={32} weight="fill" />
                )
                }

                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={`text-blue-500 ${isCurrentPath ? 'text-white' : ''} text-sm font-medium flex items-center gap-2`}>
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )
                    }
                    <span className={`text-xs rounded py-[0.125rem] px-2 border text-white ${isCurrentPath ? 'border-white' : 'border-green-300'} font-bold`}>
                        {props.type === 'live' ?
                            (
                                <div className={`${!isCurrentPath && 'text-green-300'}`}>
                                    AO VIVO
                                </div>
                            ) :
                            <div>
                                AULA PRÁTICA
                            </div>
                        }
                    </span>
                </header>

                <strong className={`${isCurrentPath ? 'border-white' : 'text-gray-200'} mt-5 block`}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}