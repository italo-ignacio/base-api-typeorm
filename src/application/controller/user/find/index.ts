import {
  errorLogger,
  getGenericFilter,
  getPagination,
  messageErrorResponse,
  ok
} from '@main/utils';
import { userFindParams } from '@data/search';
import { userListQueryFields } from '@data/validation';
import { userRepository } from '@repository/user';
import type { Controller } from '@domain/protocols';
import type { Request, Response } from 'express';
import type { userQueryFields } from '@data/validation';

/**
 * @typedef {object} FindUserPayload
 * @property {array<User>} content
 * @property {number} totalElements
 * @property {number} totalPages
 */

/**
 * @typedef {object} FindUserResponse
 * @property {Messages} message
 * @property {string} status
 * @property {FindUserPayload} payload
 */

/**
 * GET /user
 * @summary Find Users
 * @tags User
 * @security BearerAuth
 * @param {string} name.query
 * @param {string} email.query
 * @param {string} phone.query
 * @param {integer} page.query
 * @param {integer} limit.query
 * @param {string} startDate.query (Ex: 2024-01-01).
 * @param {string} endDate.query (Ex: 2024-01-01).
 * @param {string} orderBy.query - enum:id,name,phone,email,createdAt,updatedAt
 * @param {string} sort.query - enum:asc,desc
 * @return {FindUserResponse} 200 - Successful response - application/json
 * @return {BadRequest} 400 - Bad request response - application/json
 * @return {UnauthorizedRequest} 401 - Unauthorized response - application/json
 */
export const findUserController: Controller =
  () =>
  async ({ query }: Request, response: Response) => {
    try {
      const { skip, take } = getPagination({ query });

      const { order, where } = getGenericFilter<userQueryFields>({
        list: userListQueryFields,
        query
      });

      const [content, totalElements] = await userRepository.findAndCount({
        order,
        select: userFindParams,
        skip,
        take,
        where
      });

      return ok({
        payload: {
          content,
          totalElements,
          totalPages: Math.ceil(totalElements / take)
        },
        response
      });
    } catch (error) {
      errorLogger(error);

      return messageErrorResponse({ error, response });
    }
  };
