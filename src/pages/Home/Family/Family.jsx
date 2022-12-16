import { Head } from '../../../components/head/Head';
import { family } from '../../../data/family';
import styles from './Family.module.scss';
import { Member } from './Member/Member';

export const Family = () => {
    return (
        <div className={styles.container} id="family">
            <Head head="АБДУЛЛА МАЪДИЕВ ОИЛАСИ" />
            <div className={styles.family}>
                {family.map((member) => (
                    <Member {...member} />
                ))}
            </div>
        </div>
    );
};
