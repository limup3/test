package com.H2O.backend.user;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
interface CustomedUserRepository {
    Optional<User> findByUserId(String userId);


    Optional<User> findUserId(String name, String phone);

    Optional<User> findUserPw(String userId, String name, String phone);

}

public class UserRepositoryImpl extends QuerydslRepositorySupport implements CustomedUserRepository {
    @Autowired
    JPAQueryFactory queryFactory;

    UserRepositoryImpl() {
        super(User.class);
    }


    @Override
    public Optional<User> findByUserId(String userId) {
        QUser qUser = QUser.user;
        User findOne = queryFactory.selectFrom(qUser).where(qUser.userId.eq(userId)).fetchOne();

        return Optional.ofNullable(findOne);
    }

    @Override
    public Optional<User> findUserId(String name, String phone) {
        QUser qUser = QUser.user;
        User findId = queryFactory.selectFrom(qUser).where(qUser.name.eq(name)).fetchOne();
        return Optional.ofNullable(findId);
    }

    @Override
    public Optional<User> findUserPw(String userId, String name, String phone) {
        QUser qUser = QUser.user;
        User findPw = queryFactory.selectFrom(qUser).where(qUser.userId.eq(userId), qUser.name.eq(name), qUser.phone.eq(phone)).fetchOne();

        return Optional.ofNullable(findPw);
    }
}
