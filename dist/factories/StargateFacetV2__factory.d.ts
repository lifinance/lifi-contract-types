import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { StargateFacetV2, StargateFacetV2Interface } from "../StargateFacetV2";
declare type StargateFacetV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StargateFacetV2__factory extends ContractFactory {
    constructor(...args: StargateFacetV2ConstructorParams);
    deploy(_tokenMessaging: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<StargateFacetV2>;
    getDeployTransaction(_tokenMessaging: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): StargateFacetV2;
    connect(signer: Signer): StargateFacetV2__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051620024f5380380620024f583398101604081905261003191610042565b6001600160a01b0316608052610072565b60006020828403121561005457600080fd5b81516001600160a01b038116811461006b57600080fd5b9392505050565b6080516124616200009460003960008181607301526106a001526124616000f3fe6080604052600436106100345760003560e01c806314d5307714610039578063a6010a661461004e578063fb214c2f14610061575b600080fd5b61004c610047366004611892565b6100be565b005b61004c61005c366004611bd6565b6102cb565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447611cc4565b905061015585611cd7565b80610100015115610192576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61019b86611cd7565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101ec576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361022a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610267576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61028461027a60a0890160808a01611ce3565b8860c001356104c0565b61029e61029088611cd7565b61029988611d4b565b610575565b50479050818111156102bf576102bf6000846102ba8585611cc4565b6109eb565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610346576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103573447611cc4565b905086806101000151610396576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103b98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361042e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b885160c08a015161048491908a8a3360408c0135610a21565b60c08a01526104968961029988611d4b565b50479050818111156104b2576104b26000846102ba8585611cc4565b505060009091555050505050565b806000036104fa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610553578034101561054f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61054f73ffffffffffffffffffffffffffffffffffffffff8316333084610bbc565b610120820151602082015160a001515115159015151415806105ac575081610120015180156105ac5750602081015160c001515115155b156105e3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816101200151158015610631575080602001516020015160001c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610668576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516040517f5f6d9ae400000000000000000000000000000000000000000000000000000000815261ffff90911660048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f6d9ae4906024016020604051808303816000875af11580156106fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107229190611e77565b905073ffffffffffffffffffffffffffffffffffffffff811661077f5781516040517f420c482e00000000000000000000000000000000000000000000000000000000815261ffff90911660048201526024015b60405180910390fd5b604082015151608084015173ffffffffffffffffffffffffffffffffffffffff166107ba5760c08401516107b39082611e94565b90506108d3565b60808401516040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301526000919083169063dd62ed3e90604401602060405180830381865afa158015610835573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108599190611ea7565b90508560c001518110156108d057801561088f5761088f73ffffffffffffffffffffffffffffffffffffffff8316856000610c19565b6108d073ffffffffffffffffffffffffffffffffffffffff8316857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610c19565b50505b60c08401516020840180516040908101929092525181850151606086015192517fcbef2aa900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86169363cbef2aa99386936109469391929091600401611f2e565b60006040518083038185885af1158015610964573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109ab91908101906120e6565b5050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516109dd91906121a2565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a1757610a12838383610c68565b505050565b610a128282610cd6565b600083808203610a5d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008686610a6c600185611cc4565b818110610a7b57610a7b6122b5565b9050602002810190610a8d91906122e4565b610a9e906080810190606001611ce3565b90506000610aab82610d43565b905073ffffffffffffffffffffffffffffffffffffffff8216610ad557610ad23482611cc4565b90505b6000610ae18989610d8e565b9050610aed8989610e9a565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610b28818b8b85610f07565b600083610b3486610d43565b610b3e9190611cc4565b905073ffffffffffffffffffffffffffffffffffffffff8516610b6857610b658882611cc4565b90505b8b811015610bac576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d905260248101829052604401610776565b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610c0b57637939f4246000526004601cfd5b600060605260405250505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716610c5e57633e3f8f736000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cb5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a1273ffffffffffffffffffffffffffffffffffffffff841683836112f8565b73ffffffffffffffffffffffffffffffffffffffff8216610d23576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054f73ffffffffffffffffffffffffffffffffffffffff83168261133d565b600073ffffffffffffffffffffffffffffffffffffffff821615610d8657610d8173ffffffffffffffffffffffffffffffffffffffff831630611359565b610d88565b475b92915050565b60608160008167ffffffffffffffff811115610dac57610dac6118ff565b604051908082528060200260200182016040528015610dd5578160200160208202803683370190505b5090506000805b83811015610e8f57868682818110610df657610df66122b5565b9050602002810190610e0891906122e4565b610e19906080810190606001611ce3565b9150610e2482610d43565b838281518110610e3657610e366122b5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e875734838281518110610e6f57610e6f6122b5565b60200260200101818151610e839190611cc4565b9052505b600101610ddc565b509095945050505050565b60005b81811015610a125736838383818110610eb857610eb86122b5565b9050602002810190610eca91906122e4565b9050610edc60e0820160c08301612322565b15610efe57610efe610ef46060830160408401611ce3565b82608001356104c0565b50600101610e9d565b6020840151604085015184918491849083600181146112115760008686610f2f600185611cc4565b818110610f3e57610f3e6122b5565b9050602002810190610f5091906122e4565b610f61906080810190606001611ce3565b9050600089815b8181101561110e57368d8d83818110610f8357610f836122b5565b9050602002810190610f9591906122e4565b9050610fc4610faa6060830160408401611ce3565b73ffffffffffffffffffffffffffffffffffffffff161590565b806110275750611027610fdd6040830160208401611ce3565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561103e575061103e610fdd6020830183611ce3565b80156110c357506110c361105560a083018361233d565b611064916004916000916123a9565b61106d916123d3565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110f9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51611105908261138e565b50600101610f68565b505060005b61111e600185611cc4565b811015611209576000898983818110611139576111396122b5565b905060200281019061114b91906122e4565b61115c906080810190606001611ce3565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611200578682815181106111a3576111a36122b5565b60200260200101516111b482610d43565b6111be9190611cc4565b9250600073ffffffffffffffffffffffffffffffffffffffff8216156111e55760006111e7565b865b905083156111fe576111fe828a6102ba8488611cc4565b505b50600101611113565b5050506112ec565b8760005b818110156112e957368b8b83818110611230576112306122b5565b905060200281019061124291906122e4565b9050611257610faa6060830160408401611ce3565b806112705750611270610fdd6040830160208401611ce3565b80156112875750611287610fdd6020830183611ce3565b801561129e575061129e61105560a083018361233d565b6112d4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516112e0908261138e565b50600101611215565b50505b50505050505050505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610c5e576390b8ec186000526004601cfd5b60003860003884865af161054f5763b12d13eb6000526004601cfd5b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6113a361139e6020830183611ce3565b61166b565b6113d9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611419576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061142e610faa6060850160408601611ce3565b61143957600061143f565b82608001355b9050600061145b6114566060860160408701611ce3565b610d43565b905060006114726114566080870160608801611ce3565b9050826000036114a9576114a961148f6060870160408801611ce3565b61149f6040880160208901611ce3565b87608001356116a7565b84608001358210156114f4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610776565b6000806115046020880188611ce3565b73ffffffffffffffffffffffffffffffffffffffff168561152860a08a018a61233d565b60405161153692919061241b565b60006040518083038185875af1925050503d8060008114611573576040519150601f19603f3d011682016040523d82523d6000602084013e611578565b606091505b50915091508161158b5761158b816116d3565b60006115a061145660808a0160608b01611ce3565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896115d160208b018b611ce3565b6115e160608c0160408d01611ce3565b6115f160808d0160608e01611ce3565b8c60800135898711611603578661160d565b61160d8a88611cc4565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470811580159061169f5750808214155b949350505050565b610a128383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116dd565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff831661172a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561179f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c39190611ea7565b10156117ea576117ea73ffffffffffffffffffffffffffffffffffffffff851684836117f0565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716610c5e5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716610c5e57633e3f8f736000526004601cfd5b600060a0828403121561188c57600080fd5b50919050565b600080604083850312156118a557600080fd5b823567ffffffffffffffff808211156118bd57600080fd5b9084019061014082870312156118d257600080fd5b909250602084013590808211156118e857600080fd5b506118f58582860161187a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611952576119526118ff565b60405290565b6040805190810167ffffffffffffffff81118282101715611952576119526118ff565b6040516080810167ffffffffffffffff81118282101715611952576119526118ff565b60405160e0810167ffffffffffffffff81118282101715611952576119526118ff565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a0857611a086118ff565b604052919050565b600067ffffffffffffffff821115611a2a57611a2a6118ff565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611a6757600080fd5b8135611a7a611a7582611a10565b6119c1565b818152846020838601011115611a8f57600080fd5b816020850160208301376000918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611ace57600080fd5b50565b8035611adc81611aac565b919050565b80358015158114611adc57600080fd5b60006101408284031215611b0457600080fd5b611b0c61192e565b905081358152602082013567ffffffffffffffff80821115611b2d57600080fd5b611b3985838601611a56565b60208401526040840135915080821115611b5257600080fd5b50611b5f84828501611a56565b604083015250611b7160608301611ad1565b6060820152611b8260808301611ad1565b6080820152611b9360a08301611ad1565b60a082015260c082013560c082015260e082013560e0820152610100611bba818401611ae1565b90820152610120611bcc838201611ae1565b9082015292915050565b60008060008060608587031215611bec57600080fd5b843567ffffffffffffffff80821115611c0457600080fd5b611c1088838901611af1565b95506020870135915080821115611c2657600080fd5b818701915087601f830112611c3a57600080fd5b813581811115611c4957600080fd5b8860208260051b8501011115611c5e57600080fd5b602083019550809450506040870135915080821115611c7c57600080fd5b50611c898782880161187a565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610d8857610d88611c95565b6000610d883683611af1565b600060208284031215611cf557600080fd5b8135611d0081611aac565b9392505050565b803563ffffffff81168114611adc57600080fd5b600060408284031215611d2d57600080fd5b611d35611958565b9050813581526020820135602082015292915050565b600060a08236031215611d5d57600080fd5b611d6561197b565b823561ffff81168114611d7757600080fd5b8152602083013567ffffffffffffffff80821115611d9457600080fd5b818501915060e08236031215611da957600080fd5b611db161199e565b611dba83611d07565b8152602083013560208201526040830135604082015260608301356060820152608083013582811115611dec57600080fd5b611df836828601611a56565b60808301525060a083013582811115611e1057600080fd5b611e1c36828601611a56565b60a08301525060c083013582811115611e3457600080fd5b611e4036828601611a56565b60c083015250602084015250611e5b90503660408501611d1b565b6040820152611e6c60808401611ad1565b606082015292915050565b600060208284031215611e8957600080fd5b8151611d0081611aac565b80820180821115610d8857610d88611c95565b600060208284031215611eb957600080fd5b5051919050565b60005b83811015611edb578181015183820152602001611ec3565b50506000910152565b60008151808452611efc816020860160208601611ec0565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6080815263ffffffff8451166080820152602084015160a0820152604084015160c0820152606084015160e08201526000608085015160e0610100840152611f7a610160840182611ee4565b905060a08601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808085840301610120860152611fb78383611ee4565b925060c08801519150808584030161014086015250611fd68282611ee4565b92505050611ff1602083018580518252602090810151910152565b73ffffffffffffffffffffffffffffffffffffffff8316606083015261169f565b60006040828403121561202457600080fd5b61202c611958565b9050815181526020820151602082015292915050565b60006040828403121561205457600080fd5b61205c611958565b9050815168ffffffffffffffffff8116811461207757600080fd5b8152602082015167ffffffffffffffff81111561209357600080fd5b8201601f810184136120a457600080fd5b80516120b2611a7582611a10565b8181528560208385010111156120c757600080fd5b6120d8826020830160208601611ec0565b602084015250909392505050565b600080600083850360e08112156120fc57600080fd5b608081121561210a57600080fd5b506040516060810167ffffffffffffffff828210818311171561212f5761212f6118ff565b816040528651835260208701519150808216821461214c57600080fd5b81602084015261215f8860408901612012565b60408401528295506121748860808901612012565b945060c087015192508083111561218a57600080fd5b505061219886828701612042565b9150509250925092565b6020815281516020820152600060208301516101408060408501526121cb610160850183611ee4565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526122068382611ee4565b9250506060850151612230608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206122a38187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261231857600080fd5b9190910192915050565b60006020828403121561233457600080fd5b611d0082611ae1565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261237257600080fd5b83018035915067ffffffffffffffff82111561238d57600080fd5b6020019150368190038213156123a257600080fd5b9250929050565b600080858511156123b957600080fd5b838611156123c657600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156124135780818660040360031b1b83161692505b505092915050565b818382376000910190815291905056fea2646970667358221220187bac0a5eda52b46b28bb9112c79a386871174c3c86e6b43356a32662da2df464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_tokenMessaging";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaStargate";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_stargateData";
            readonly type: "tuple";
            readonly internalType: "struct StargateFacetV2.StargateData";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "sendParams";
                readonly type: "tuple";
                readonly internalType: "struct IStargate.SendParam";
                readonly components: readonly [{
                    readonly name: "dstEid";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "to";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "amountLD";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "minAmountLD";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "extraOptions";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "composeMsg";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "oftCmd";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "fee";
                readonly type: "tuple";
                readonly internalType: "struct IStargate.MessagingFee";
                readonly components: readonly [{
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaStargate";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_stargateData";
            readonly type: "tuple";
            readonly internalType: "struct StargateFacetV2.StargateData";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "sendParams";
                readonly type: "tuple";
                readonly internalType: "struct IStargate.SendParam";
                readonly components: readonly [{
                    readonly name: "dstEid";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "to";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "amountLD";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "minAmountLD";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "extraOptions";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "composeMsg";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "oftCmd";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "fee";
                readonly type: "tuple";
                readonly internalType: "struct IStargate.MessagingFee";
                readonly components: readonly [{
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "tokenMessaging";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ITokenMessaging";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAssetId";
        readonly inputs: readonly [{
            readonly name: "invalidAssetId";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): StargateFacetV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): StargateFacetV2;
}
export {};
