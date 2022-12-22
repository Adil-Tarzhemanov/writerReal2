import { Head } from '../../../components/head/Head';
import { familyLat } from '../../../data/familyLat';
import styles from './Family.module.scss';
import { Member } from './Member/Member';

export const Family = () => {
    return (
        <div className={styles.container} id="family">
            <Head head="ABDULLA MADIEV OILASI" />
            <div className={styles.family}>
                {familyLat.map((member) => (
                    <Member {...member} />
                ))}
            </div>
        </div>
    );
};
