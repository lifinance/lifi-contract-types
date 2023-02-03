import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Executor, ExecutorInterface } from "../Executor";
declare type ExecutorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Executor__factory extends ContractFactory {
    constructor(...args: ExecutorConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Executor>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _erc20Proxy: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Executor;
    connect(signer: Signer): Executor__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620025a8380380620025a88339810160408190526200003491620000af565b600080546001600160a01b038085166001600160a01b03199283161783556002805491851691909216811790915560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a25050620000e7565b80516001600160a01b0381168114620000aa57600080fd5b919050565b60008060408385031215620000c357600080fd5b620000ce8362000092565b9150620000de6020840162000092565b90509250929050565b6124b180620000f76000396000f3fe60806040526004361061009a5760003560e01c80637f555b0311610069578063a83cbaa31161004e578063a83cbaa314610188578063e30c39781461019b578063f2fde38b146101c857600080fd5b80637f555b03146101055780638da5cb5b1461015b57600080fd5b806323452b9c146100a65780634f91bc2b146100bd5780635004a4b7146100d05780637200b829146100f057600080fd5b366100a157005b600080fd5b3480156100b257600080fd5b506100bb6101e8565b005b6100bb6100cb366004612086565b6102b2565b3480156100dc57600080fd5b506100bb6100eb3660046120fa565b610353565b3480156100fc57600080fd5b506100bb610413565b34801561011157600080fd5b506002546101329073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561016757600080fd5b506000546101329073ffffffffffffffffffffffffffffffffffffffff1681565b6100bb610196366004612117565b6104f9565b3480156101a757600080fd5b506001546101329073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101d457600080fd5b506100bb6101e33660046120fa565b610594565b60005473ffffffffffffffffffffffffffffffffffffffff163314610239576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610288576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161032d576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181600001819055506103488686868686600060016106f2565b600090555050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103a4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a990600090a250565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610465576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610574576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561058887878787878760006106f2565b60009055505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105e5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610632576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610681576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6000808088886107036001826121c2565b818110610712576107126121d5565b90506020028101906107249190612204565b6107359060808101906060016120fa565b905073ffffffffffffffffffffffffffffffffffffffff8116156107635761075c816109cb565b915061077a565b3461076d826109cb565b61077791906121c2565b91505b73ffffffffffffffffffffffffffffffffffffffff8716156108ed5761079f876109cb565b92508315610850576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa15801561081a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083e9190612242565b905061084a8882610a84565b50610904565b6002546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b1580156108d057600080fd5b505af11580156108e4573d6000803e3d6000fd5b50505050610904565b346108f7886109cb565b61090191906121c2565b92505b6109108a8a8a89610c04565b600061091b886109cb565b90508381111561093957610939888861093487856121c2565b610f16565b6000610944836109cb565b90508381111561095d5761095d838961093487856121c2565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610a7c576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a779190612242565b610a7e565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8216610add5780341015610ad9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610b17576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba89190612242565b905081811015610bf3576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610bff83333085610f47565b505050565b8282828160018114610e2b576000610c1c8585611161565b905060008585610c2d6001866121c2565b818110610c3c57610c3c6121d5565b9050602002810190610c4e9190612204565b610c5f9060808101906060016120fa565b9050600088815b81811015610d405760025473ffffffffffffffffffffffffffffffffffffffff168c8c83818110610c9957610c996121d5565b9050602002810190610cab9190612204565b610cb99060208101906120fa565b73ffffffffffffffffffffffffffffffffffffffff1603610d06576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610d1957610d196121d5565b9050602002810190610d2b9190612204565b9050610d378e8261126d565b50600101610c66565b505060005b610d506001866121c2565b811015610e22576000888883818110610d6b57610d6b6121d5565b9050602002810190610d7d9190612204565b610d8e9060808101906060016120fa565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e1957610dcc816109cb565b9250848281518110610de057610de06121d5565b6020026020010151831115610e1957610e198188878581518110610e0657610e066121d5565b60200260200101518661093491906121c2565b50600101610d45565b50505050610f0c565b8560005b81811015610f095760025473ffffffffffffffffffffffffffffffffffffffff16898983818110610e6257610e626121d5565b9050602002810190610e749190612204565b610e829060208101906120fa565b73ffffffffffffffffffffffffffffffffffffffff1603610ecf576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36898983818110610ee257610ee26121d5565b9050602002810190610ef49190612204565b9050610f008b8261126d565b50600101610e2f565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610f3d57610bff83838361159d565b610bff82826116d2565b73ffffffffffffffffffffffffffffffffffffffff8416610f94576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fe1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611052573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110769190612242565b9050611084828686866117fc565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156110f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111189190612242565b61112291906121c2565b14611159576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60608160008167ffffffffffffffff81111561117f5761117f61225b565b6040519080825280602002602001820160405280156111a8578160200160208202803683370190505b5090506000805b83811015611262578686828181106111c9576111c96121d5565b90506020028101906111db9190612204565b6111ec9060808101906060016120fa565b91506111f7826109cb565b838281518110611209576112096121d5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661125a5734838281518110611242576112426121d5565b6020026020010181815161125691906121c2565b9052505b6001016111af565b509095945050505050565b61128361127d60208301836120fa565b3b151590565b6112b9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036112f9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061132861130e60608501604086016120fa565b73ffffffffffffffffffffffffffffffffffffffff161590565b611333576000611339565b82608001355b9050600061135561135060608601604087016120fa565b6109cb565b9050600061136c61135060808701606088016120fa565b9050826000036113a3576113a361138960608701604088016120fa565b61139960408801602089016120fa565b87608001356118d8565b84608001358210156113ee576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610bea565b6000806113fe60208801886120fa565b73ffffffffffffffffffffffffffffffffffffffff168561142260a08a018a61228a565b6040516114309291906122ef565b60006040518083038185875af1925050503d806000811461146d576040519150601f19603f3d011682016040523d82523d6000602084013e611472565b606091505b5091509150816114bd57600061148782611a1d565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bea9190612323565b60006114d261135060808a0160608b016120fa565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961150360208b018b6120fa565b61151360608c0160408d016120fa565b61152360808d0160608e016120fa565b8c60800135898711611535578661153f565b61153f8a886121c2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166115ea576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611657573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167b9190612242565b9050808211156116c1576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610bea565b6116cc848484611a9b565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661171f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611762576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610bea565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146117bc576040519150601f19603f3d011682016040523d82523d6000602084013e6117c1565b606091505b5050905080610bff576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526116cc9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611af1565b73ffffffffffffffffffffffffffffffffffffffff83166118f857505050565b73ffffffffffffffffffffffffffffffffffffffff8216611945576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156119bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119df9190612242565b9050818110156116cc576116cc8484611a18847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6121c2565b611bfd565b6060604482511015611a6257505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611a7e6004808551611a7691906121c2565b859190611cfb565b905080806020019051810190611a949190612374565b9392505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610bff9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611856565b6000611b53826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e159092919063ffffffff16565b805190915015610bff5780806020019051810190611b719190612434565b610bff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610bea565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611c74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c989190612242565b611ca29190612456565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506116cc9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611856565b606081611d0981601f612456565b1015611d41576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d4b8284612456565b84511015611d85576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611da45760405191506000825260208201604052611e0c565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ddd578051835260209283019201611dc5565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611e248484600085611e2c565b949350505050565b606082471015611ebe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610bea565b73ffffffffffffffffffffffffffffffffffffffff85163b611f3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610bea565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f659190612469565b60006040518083038185875af1925050503d8060008114611fa2576040519150601f19603f3d011682016040523d82523d6000602084013e611fa7565b606091505b5091509150611fb7828286611fc2565b979650505050505050565b60608315611fd1575081611a94565b825115611fe15782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bea9190612323565b60008083601f84011261202757600080fd5b50813567ffffffffffffffff81111561203f57600080fd5b6020830191508360208260051b850101111561205a57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461208357600080fd5b50565b60008060008060006080868803121561209e57600080fd5b85359450602086013567ffffffffffffffff8111156120bc57600080fd5b6120c888828901612015565b90955093505060408601356120dc81612061565b915060608601356120ec81612061565b809150509295509295909350565b60006020828403121561210c57600080fd5b8135611a9481612061565b60008060008060008060a0878903121561213057600080fd5b86359550602087013567ffffffffffffffff81111561214e57600080fd5b61215a89828a01612015565b909650945050604087013561216e81612061565b9250606087013561217e81612061565b80925050608087013590509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a7e57610a7e612193565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261223857600080fd5b9190910192915050565b60006020828403121561225457600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122bf57600080fd5b83018035915067ffffffffffffffff8211156122da57600080fd5b60200191503681900382131561205a57600080fd5b8183823760009101908152919050565b60005b8381101561231a578181015183820152602001612302565b50506000910152565b60208152600082518060208401526123428160408501602087016122ff565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60006020828403121561238657600080fd5b815167ffffffffffffffff8082111561239e57600080fd5b818401915084601f8301126123b257600080fd5b8151818111156123c4576123c461225b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561240a5761240a61225b565b8160405282815287602084870101111561242357600080fd5b611fb78360208301602088016122ff565b60006020828403121561244657600080fd5b81518015158114611a9457600080fd5b80820180821115610a7e57610a7e612193565b600082516122388184602087016122ff56fea2646970667358221220333597075b6b58da57706374ba21689f008403d04ac7534227ec868c2a752ed064736f6c63430008110033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): ExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Executor;
}
export {};
